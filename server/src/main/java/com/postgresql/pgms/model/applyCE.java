package com.postgresql.pgms.model;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "ApplyCE")
public class applyCE {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long appCEId ;
    private long courseId;
}
