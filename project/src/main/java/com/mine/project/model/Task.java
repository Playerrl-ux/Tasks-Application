package com.mine.project.model;

import com.mine.project.model.enums.Stats;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;


@Document(collection = "Tasks")
public class Task {

    @Id
    private String id;


    private String title;
    private String description;
    private Stats stats;
    private boolean urgent;
    private boolean important;
    private Date estimatedEnd;

    public Task(){}

    public Task(String id, String title, String description, Stats stats, boolean urgent, boolean Important, Date estimatedEnd) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.stats = stats;
        this.urgent = urgent;
        this.important = Important;
        this.estimatedEnd = estimatedEnd;
    }

    public Task(String title, String description, Stats stats, boolean urgent, Date estimatedEnd, boolean Important) {
        this.title = title;
        this.description = description;
        this.stats = stats;
        this.urgent = urgent;
        this.estimatedEnd = estimatedEnd;
        this.important = Important;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Stats getStats() {
        return stats;
    }

    public void setStats(Stats stats) {
        this.stats = stats;
    }

    public boolean isUrgent() {
        return urgent;
    }

    public void setUrgent(boolean urgent) {
        this.urgent = urgent;
    }

    public boolean isImportant() {
        return important;
    }

    public void setImportant(boolean important) {
        this.important = important;
    }

    public Date getEstimatedEnd() {
        return estimatedEnd;
    }

    public void setEstimatedEnd(Date estimatedEnd) {
        this.estimatedEnd = estimatedEnd;
    }
}
