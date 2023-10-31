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
    private Integer intakeID;

    private String year;
    private long rate;
    private long lectureFeePerHour;
    private long practicalFeePerHour;
    private long TAFeePerHour;
    private long LMSFeePerHour;

//    public Intake() {
//    }

    public Intake(String year, long rate, long lectureFeePerHour, long practicalFeePerHour,
                  long TAFeePerHour, long LMSFeePerHour) {
        this.year = year;
        this.rate = rate;
        this.lectureFeePerHour = lectureFeePerHour;
        this.practicalFeePerHour = practicalFeePerHour;
        this.TAFeePerHour = TAFeePerHour;
        this.LMSFeePerHour = LMSFeePerHour;
    }
}
