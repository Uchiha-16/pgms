package com.postgresql.pgms.model;

import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDate;
import java.time.LocalTime;

@Data
@Entity
@Table(name = "Session")
public class session {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long sessionId ;
    private LocalDate date;
    private LocalTime startTime;
    private LocalTime endTime;
    private Integer hours;
    private String type;
    private long tsId;
    private long courseId;
}
