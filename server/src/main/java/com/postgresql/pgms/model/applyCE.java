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
@Table(name = "ApplyCE")
public class applyCE {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long appCEId ;
    private long courseId;
}
