package com.postgresql.pgms.model;

import jakarta.persistence.*;
import lombok.Data;

import java.math.BigDecimal;
import java.time.LocalDate;

@Data
@Entity
@Table(name = "Voucher")
public class Voucher {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long voucherID;

    private LocalDate issuedDate;
    private String month;
    private BigDecimal payment;
    private String programID;
    private String headID;
    private String DRID;
    private String PCID;
    private String staffID;

    public Voucher() {
    }

    public Voucher(LocalDate issuedDate, String month, BigDecimal payment, String programID, String headID,
                   String DRID, String PCID, String staffID) {
        this.issuedDate = issuedDate;
        this.month = month;
        this.payment = payment;
        this.programID = programID;
        this.headID = headID;
        this.DRID = DRID;
        this.PCID = PCID;
        this.staffID = staffID;
    }
}
