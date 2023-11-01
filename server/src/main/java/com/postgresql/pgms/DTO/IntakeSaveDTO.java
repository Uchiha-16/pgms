package com.postgresql.pgms.DTO;

import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
public class IntakeSaveDTO {
    private String year;
    private long rate;
    private long budget;
    private Integer MCS;
    private Integer MIT;
    private Integer MIS;
    private Integer MBA;

    public String getYear() {
        return year;
    }

    public void setYear(String year) {
        this.year = year;
    }

    public long getRate() {
        return rate;
    }

    public void setRate(long rate) {
        this.rate = rate;
    }

    public long getBudget() {
        return budget;
    }

    public void setBudget(long budget) {
        this.budget = budget;
    }

    public Integer getMCS() {
        return MCS;
    }

    public void setMCS(Integer MCS) {
        this.MCS = MCS;
    }

    public Integer getMIT() {
        return MIT;
    }

    public void setMIT(Integer MIT) {
        this.MIT = MIT;
    }

    public Integer getMIS() {
        return MIS;
    }

    public void setMIS(Integer MIS) {
        this.MIS = MIS;
    }

    public Integer getMBA() {
        return MBA;
    }

    public void setMBA(Integer MBA) {
        this.MBA = MBA;
    }
}
