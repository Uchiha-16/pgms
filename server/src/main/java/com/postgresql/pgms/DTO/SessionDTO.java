package com.postgresql.pgms.DTO;

import java.time.LocalDate;
import java.time.LocalTime;

public class SessionDTO {
    private LocalDate date;
    private LocalTime startTime;
    private LocalTime endTime;
    private Integer hours;
    private String type;

    private Integer tsID;

    private Integer courseId;

    private Integer staffID;

    private Integer pcID;

    private String status;

    private String hallName;

    public SessionDTO() {
    }

    public SessionDTO(LocalDate date, LocalTime startTime, LocalTime endTime, Integer hours, String type, Integer tsID, Integer courseId, Integer staffID, Integer pcID, String status, String hallName) {
        this.date = date;
        this.startTime = startTime;
        this.endTime = endTime;
        this.hours = hours;
        this.type = type;
        this.tsID = tsID;
        this.courseId = courseId;
        this.staffID = staffID;
        this.pcID = pcID;
        this.status = status;
        this.hallName = hallName;
    }

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

    public void setHallName(String hallName) {
        this.hallName = hallName;
    }

    public String getHallName() {
        return hallName;
    }

}


