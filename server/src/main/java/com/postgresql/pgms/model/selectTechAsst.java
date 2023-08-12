package com.postgresql.pgms.model;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "SelectTechAsst")
public class selectTechAsst {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long taid ;
    private long lecturerId;
}
