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
@Table(name = "Allowance")
public class Allowance {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long scheduleID;

    private String officerName;

//    public Allowance() {
//    }

    public Allowance(String officerName) {
        this.officerName = officerName;
    }
}
