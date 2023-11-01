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
@Table(name = "SelectTechAsst")
public class selectTechAsst {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long taid ;
    private long lecturerId;
}
