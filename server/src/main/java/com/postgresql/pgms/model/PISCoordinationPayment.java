package com.postgresql.pgms.model;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "PISCoordinationPayment")
public class PISCoordinationPayment {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long scheduleID;

    private String officerName;

    public PISCoordinationPayment() {
    }

    public PISCoordinationPayment(String officerName, long currAmount) {
        this.officerName = officerName;
    }
}
