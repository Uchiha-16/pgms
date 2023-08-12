package com.postgresql.pgms.model;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "Course")
public class course {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long courseId ;
    private String courseNo;
    private String courseName;
    private long semester;
    private Integer credit;
    private String hallName;
    private long programId;

    public course(String courseNo, String courseName, long semester, Integer credit, String hallName, long programId) {
        this.courseNo = courseNo;
        this.courseName = courseName;
        this.semester = semester;
        this.credit = credit;
        this.hallName = hallName;
        this.programId = programId;
    }

    public course(long courseId, String courseNo, String courseName, long semester, Integer credit, String hallName, long programId) {
        this.courseId = courseId;
        this.courseNo = courseNo;
        this.courseName = courseName;
        this.semester = semester;
        this.credit = credit;
        this.hallName = hallName;
        this.programId = programId;
    }
}
