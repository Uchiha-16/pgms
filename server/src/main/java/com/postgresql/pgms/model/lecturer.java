package com.postgresql.pgms.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Data
@Entity
@Table(name = "Lecturer")
public class lecturer {
    @Id
    private long id;
    private String name;
}

