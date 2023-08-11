package com.postgresql.pgms.model;
import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table (name = "nomination")
public class nomination {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
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
}
