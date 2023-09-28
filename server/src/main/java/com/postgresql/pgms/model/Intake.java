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
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long intakeID;

    private int year;
    private BigDecimal rate;
    private BigDecimal lectureFeePerHour;
    private BigDecimal practicalFeePerHour;
    private BigDecimal TAFeePerHour;
    private BigDecimal LMSFeePerHour;

//    public Intake() {
//    }

    public Intake(int year, BigDecimal rate, BigDecimal lectureFeePerHour, BigDecimal practicalFeePerHour,
                  BigDecimal TAFeePerHour, BigDecimal LMSFeePerHour) {
        this.year = year;
        this.rate = rate;
        this.lectureFeePerHour = lectureFeePerHour;
        this.practicalFeePerHour = practicalFeePerHour;
        this.TAFeePerHour = TAFeePerHour;
        this.LMSFeePerHour = LMSFeePerHour;
    }
}
