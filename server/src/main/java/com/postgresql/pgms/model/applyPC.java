package com.postgresql.pgms.model;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "ApplyPC")
public class applyPC {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long appPCId ;
    private long programId;
}
