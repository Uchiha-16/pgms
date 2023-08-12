package com.postgresql.pgms.model;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "coordinationPayment")
public class coordinationPayment {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long scheduleID;

    private String officerName;
    private long currAmount;

    public coordinationPayment() {
    }

    public coordinationPayment(String officerName, long currAmount) {
        this.officerName = officerName;
        this.currAmount = currAmount;
    }
}
