package com.mine.project.service;

import com.mine.project.exception.AlreadyExistsException;
import com.mine.project.exception.NotFoundException;
import com.mine.project.exception.TitleConflictException;
import com.mine.project.model.Task;
import com.mine.project.model.enums.Stats;
import com.mine.project.repository.TaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.time.Instant;
import java.util.Date;
import java.util.List;
import java.util.Objects;
import java.util.Optional;


@Service
public class TaskService {

    TaskRepository taskRepository;

    @Autowired
    public TaskService(TaskRepository taskRepository){
        this.taskRepository = taskRepository;
    }

    public Task returnTaskByTitle(String title){
        Optional<Task> search = taskRepository.findByTitle(title);
        return search.orElseThrow(() -> new NotFoundException("Resource not found"));
    }

    public Page<Task> returnTaskByStats(Stats stats, Pageable pageable){
        Page<Task> search = taskRepository.findByStats(stats, pageable);
        if(search.isEmpty()){
            throw new NotFoundException("Resource not found");
        }else{
            return search;
        }
    }

    public Page<Task> returnNotFinishedTaskBeforeDate(Instant date, Pageable pageable){
        Page<Task> search = taskRepository.findByEstimatedEndLessThanEqualAndStatsNot(date,  Stats.FINISHED, pageable);
        if(search.isEmpty()){
            throw new NotFoundException("Resource not found");
        }else{
            return search;
        }
    }

    public Page<Task> returnTaskBeforeDateAndStats(Instant date, Stats stats, Pageable pageable){
        Page<Task> page = taskRepository.findByEstimatedEndLessThanEqualAndStats(date, stats, pageable);
        if(page.isEmpty()){
            throw new NotFoundException("Resource not found");
        }else{
            return page;
        }
    }

    public void createTask(Task task){
        Optional<Task> search = taskRepository.findByTitle(task.getTitle());
        System.out.println(search + " aqui");
        if(search.isPresent()){
            throw new AlreadyExistsException("Already exists a task  with the provided name");
        }
        taskRepository.save(task);
    }

    public void updateTask(Task task, String title){
        if(!task.getTitle().equals(title)){
            throw new TitleConflictException("The title cannot be changed");
        }
        Optional<Task> search = taskRepository.findByTitle(task.getTitle());
        if(search.isPresent()){
            Task task1 = search.get();
            task1.setDescription(task.getDescription());
            task1.setImportant(task.isImportant());
            task1.setUrgent(task.isUrgent());
            task1.setEstimatedEnd(task.getEstimatedEnd());
            task1.setStats(task.getStats());
            taskRepository.save(task1);
        }else{
            throw new NotFoundException("Resource not found");
        }
    }

    public void removeTaskByTitle(String title){
        Optional<Task> search = taskRepository.findByTitle(title);
        if(search.isPresent()){
            taskRepository.delete(search.get());
        }else{
            throw new NotFoundException("Resource not found");
        }
    }

}
