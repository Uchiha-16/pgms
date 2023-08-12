package com.postgresql.pgms.model;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "Program")
public class Program {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long programID;

    private String name;

    public Program() {
    }

    public Program(String name) {
        this.name = name;
    }
}
