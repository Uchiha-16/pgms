package com.postgresql.pgms.model;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table (name = "nomination")
public class nomination {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private long courseId;
    private String courseName;
    private String description;
    private Boolean status;

    public nomination() {
    }

    public nomination(long id, long courseId, String courseName, String description, Boolean status) {
        this.id = id;
        this.courseId = courseId;
        this.courseName = courseName;
        this.description = description;
        this.status = status;
    }

    public nomination(long courseId, String courseName, String description, Boolean status) {
        this.courseId = courseId;
        this.courseName = courseName;
        this.description = description;
        this.status = status;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public long getCourseId() {
        return courseId;
    }

    public void setCourseId(long courseId) {
        this.courseId = courseId;
    }

    public String getCourseName() {
        return courseName;
    }

    public void setCourseName(String courseName) {
        this.courseName = courseName;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Boolean getStatus() {
        return status;
    }

    public void setStatus(Boolean status) {
        this.status = status;
    }

    @Override
    public String toString() {
        return "nominations{" +
                "id=" + id +
                ", courseId=" + courseId +
                ", courseName='" + courseName + '\'' +
                ", description='" + description + '\'' +
                ", status=" + status +
                '}';
    }
}
