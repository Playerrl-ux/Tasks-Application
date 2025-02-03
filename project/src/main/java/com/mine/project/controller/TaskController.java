package com.mine.project.controller;

import com.mine.project.dto.MessageDTO;
import com.mine.project.model.Task;
import com.mine.project.model.enums.Stats;
import com.mine.project.service.TaskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.time.Instant;
import java.util.Date;
import java.util.List;
import java.util.Optional;

@Controller
@RequestMapping("/task")
public class TaskController{

    TaskService taskService;

    @Autowired
    public TaskController(TaskService taskService){
        this.taskService = taskService;
    }


    @PostMapping("/create")
    public ResponseEntity<Task> createTask(@RequestBody Task task){
        taskService.createTask(task);
        return new ResponseEntity<>(task, HttpStatus.CREATED);
    }

    @PutMapping("/edit/{title}")
    public ResponseEntity<Task> editTask(@RequestBody Task task, @PathVariable("title") String title){
        taskService.updateTask(task, title);
        return new ResponseEntity<>(task, HttpStatus.OK);
    }

    @GetMapping("/title/{title}")
    public ResponseEntity<Task> getTaskByTitle(@PathVariable("title") String title) {
        Task task = taskService.returnTaskByTitle(title);
        System.out.println("titulo " + task);
        return new ResponseEntity<>(task, HttpStatus.OK);
    }

    // Retornar lista de Tasks por status
    @GetMapping("/stats/{stats}")
    public ResponseEntity<Page<Task>> getTasksByStatus(@PathVariable Stats stats,
                                                       @RequestParam(defaultValue = "0") int page, @RequestParam(defaultValue = "5") int size) {
        Pageable pageable = PageRequest.of(page, size);
        return new ResponseEntity<>(taskService.returnTaskByStats(stats, pageable), HttpStatus.OK);
    }

    // Retornar lista de Tasks com data de término estimada anterior à data fornecida
    @GetMapping("/before-date/{date}")
    public ResponseEntity<Page<Task>> getNotFinishedTasksBeforeDate(@PathVariable Instant date,
                                                                    @RequestParam(defaultValue = "0") int page, @RequestParam(defaultValue = "5") int size) {
        Pageable pageable = PageRequest.of(page, size);
        return new ResponseEntity<>(taskService.returnNotFinishedTaskBeforeDate(date, pageable), HttpStatus.OK);
    }

    //usado para retornar uma task por data e por stats na página inicial
    @GetMapping("/before-date-stats/{date}/{stats}")
    public ResponseEntity<Page<Task>> getTasksDateAndStats(@PathVariable(value = "date") Instant date,
                                                           @PathVariable(value = "stats") Stats stats,
                                                            @RequestParam(defaultValue = "0") int page, @RequestParam(defaultValue = "5") int size) {
        Pageable pageable = PageRequest.of(page, size);
        return new ResponseEntity<>(taskService.returnTaskBeforeDateAndStats(date, stats, pageable), HttpStatus.OK);
    }


    @DeleteMapping("/title/{title}")
    public ResponseEntity<Void> deleteTaskByTitle(@PathVariable("title") String title){
        taskService.removeTaskByTitle(title);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PostMapping("/resource")
    public ResponseEntity<MessageDTO> resource(){
        return new ResponseEntity<>(new MessageDTO("deu certo"), HttpStatus.OK);
    }



}
