package com.mine.project.repository;

import com.mine.project.model.Task;
import com.mine.project.model.enums.Stats;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.time.Instant;
import java.util.Date;
import java.util.List;
import java.util.Optional;

@Repository
public interface TaskRepository extends MongoRepository<Task, String> {

    List<Task> findByEstimatedEndBetween(Date start, Date end);

    Optional<Task> findByTitle(String title);

    Page<Task> findByStats(Stats stats, Pageable pageable);

    Page<Task> findByEstimatedEndLessThanEqualAndStatsNot(Instant start, Stats stats, Pageable pageable);

    Page<Task> findByEstimatedEndLessThanEqualAndStats(Instant endDate, Stats stats, Pageable pageable);

}
