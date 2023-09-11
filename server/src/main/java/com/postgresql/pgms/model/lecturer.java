package com.postgresql.pgms.model;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "Lecturer")
public class lecturer{
    @Id
    @OneToOne
    @JoinColumn(name = "user_id")
    private Users user;
    private String qualification;
}
