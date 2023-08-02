package com.postgresql.pgms.model;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "Lecturer")
public class lecturer{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id ;
    private String firstName;
    private String lastName;
    private String qualification;
}
