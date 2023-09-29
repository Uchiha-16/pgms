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
@Table(name = "ApplyPC")
public class applyPC {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long appPCId ;
    private long programId;
}
