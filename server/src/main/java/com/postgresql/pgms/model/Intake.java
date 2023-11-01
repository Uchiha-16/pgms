package com.postgresql.pgms.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "Intake")
public class Intake {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer intakeID;

    private String year;
    private long rate;
    private long budget;

    @ManyToOne
    @JoinColumn(name = "MCS_id")
    private Users MCS;

    @ManyToOne
    @JoinColumn(name = "MIT_id")
    private Users MIT;

    @ManyToOne
    @JoinColumn(name = "MIS_id")
    private Users MIS;

    @ManyToOne
    @JoinColumn(name = "MBA_id")
    private Users MBA;



    public Intake(String year, long rate, long budget, Users MCS, Users MIT, Users MIS, Users MBA) {
        this.year = year;
        this.rate = rate;
        this.budget = budget;
        this.MCS = MCS;
        this.MIT = MIT;
        this.MIS = MIS;
        this.MBA = MBA;
    }
}
