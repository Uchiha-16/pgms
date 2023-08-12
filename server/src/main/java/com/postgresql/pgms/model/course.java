package com.postgresql.pgms.model;

import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDate;
import java.time.LocalTime;

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
}
