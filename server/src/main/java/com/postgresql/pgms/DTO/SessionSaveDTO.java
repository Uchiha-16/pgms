package com.postgresql.pgms.DTO;

import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.time.LocalTime;

@NoArgsConstructor
@AllArgsConstructor
public class SessionSaveDTO {

    private Integer intakeID;
    private LocalDate date;
    private LocalTime startTime;
    private LocalTime endTime;
    private Integer hours;
    private String type;
    private String hallName;

    private Integer tsID;

    private Integer courseId;

    private Integer staffID;

    private Integer pcID;

    private String status;

    public LocalDate getDate() {
        return date;
    }

    public void setDate(LocalDate date) {
        this.date = date;
    }

    public LocalTime getStartTime() {
        return startTime;
    }

    public void setStartTime(LocalTime startTime) {
        this.startTime = startTime;
    }

    public LocalTime getEndTime() {
        return endTime;
    }

    public void setEndTime(LocalTime endTime) {
        this.endTime = endTime;
    }

    public Integer getHours() {
        return hours;
    }

    public void setHours(Integer hours) {
        this.hours = hours;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public Integer getTsID() {
        return tsID;
    }

    public void setTsID(Integer tsID) {
        this.tsID = tsID;
    }

    public Integer getCourseId() {
        return courseId;
    }

    public void setCourseId(Integer courseId) {
        this.courseId = courseId;
    }

    public Integer getStaffID() {
        return staffID;
    }

    public void setStaffID(Integer staffID) {
        this.staffID = staffID;
    }

    public Integer getPcID() {
        return pcID;
    }

    public void setPcID(Integer pcID) {
        this.pcID = pcID;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public Integer getTsId() {
        return tsID;
    }

    public void setTsId(Integer tsID) {
        this.tsID = tsID;
    }

    public Integer getIntakeID() {
        return intakeID;
    }

    //get hall name from course table
    public String getHallName() {
        return hallName;
    }

    //set hall name from course table
    public void setHallName(String hallName) {
        this.hallName = hallName;
    }
}


