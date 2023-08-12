package com.postgresql.pgms.model;
import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "Head")
public class head {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long hId ;
    private long userId;
}

