package com.postgresql.pgms.model;

import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDate;

@Data
@Entity
@Table(name = "budget")
public class Budget {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long scheduleID;

    private String name;
    private String month;
    private LocalDate startDate;
    private LocalDate endDate;
    private long prevAmount;
    private String type;
    private String intakeID;
    private String headID;
    private String DRID;
    private String PCID;
    private String staffID;

    public Budget() {
    }

    public Budget(String name, String month, LocalDate startDate, LocalDate endDate, long prevAmount,
                  String type, String intakeID, String headID, String DRID, String PCID, String staffID) {
        this.name = name;
        this.month = month;
        this.startDate = startDate;
        this.endDate = endDate;
        this.prevAmount = prevAmount;
        this.type = type;
        this.intakeID = intakeID;
        this.headID = headID;
        this.DRID = DRID;
        this.PCID = PCID;
        this.staffID = staffID;
    }
}
