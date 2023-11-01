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
public class teachingStaffReq {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long tsid1 ;
    private long tsid2 ;
    private String message;
}
