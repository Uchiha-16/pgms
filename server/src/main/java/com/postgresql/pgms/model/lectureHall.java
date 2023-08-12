package com.postgresql.pgms.model;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "lectureHall")
public class lectureHall {
    @Id
    private String hallName; // Using hallName as primary key

    private int capacity;

    public lectureHall() {
    }

    public lectureHall(String hallName, int capacity) {
        this.hallName = hallName;
        this.capacity = capacity;
    }
}
