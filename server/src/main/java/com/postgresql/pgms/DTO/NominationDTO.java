package com.postgresql.pgms.DTO;

import com.postgresql.pgms.model.Users;

import java.time.LocalDate;

public class NominationDTO {
    private long nominationid;
    private long userID;
    private long programId;
    private String semester;
    private long courseId;
    private String status;
    private LocalDate date;

    public NominationDTO() {
    }

    public NominationDTO(long nominationid, long userID, long programId, String semester, long courseId, String status, LocalDate date) {
        this.nominationid = nominationid;
        this.userID = userID;
        this.programId = programId;
        this.semester = semester;
        this.courseId = courseId;
        this.status = status;
        this.date = date;
    }

    public long getNominationid() {
        return nominationid;
    }

    public void setNominationid(long nominationid) {
        this.nominationid = nominationid;
    }

    public long getUserID() {
        return userID;
    }

    public void setUserID(long userID) {
        this.userID = userID;
    }

    public long getProgramId() {
        return programId;
    }

    public void setProgramId(long programId) {
        this.programId = programId;
    }

    public String getSemester() {
        return semester;
    }

    public void setSemester(String semester) {
        this.semester = semester;
    }

    public long getCourseId() {
        return courseId;
    }

    public void setCourseId(long courseId) {
        this.courseId = courseId;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public LocalDate getDate() {
        return date;
    }

    public void setDate(LocalDate date) {
        this.date = date;
    }
}
