package com.postgresql.pgms.model;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "Program")
public class program {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long programID;

    private String name;

    public program() {
    }

    public program(String name) {
        this.name = name;
    }
}
