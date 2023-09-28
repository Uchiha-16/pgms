package com.postgresql.pgms.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "Program")
public class program {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer programID;

    private String name;

//    public program() {
//    }

    public program(String name) {
        this.name = name;
    }
}
