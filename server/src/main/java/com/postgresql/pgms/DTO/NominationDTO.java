package com.postgresql.pgms.DTO;

import com.postgresql.pgms.model.Nominations;

import java.time.LocalDate;

public class NominationDTO {
    private long nominationid;
    private long userID;
    private String programId;
    private Integer semester;
    private String courseId;
    private String status;
    private LocalDate date;

    public NominationDTO(Nominations nomination) {
    }

    public NominationDTO(long nominationid, long userID, String programId, Integer semester, String courseId, String status, LocalDate date) {
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

    public String getProgramId() {
        return programId;
    }

    public void setProgramId(String programId) {
        this.programId = programId;
    }

    public Integer getSemester() {
        return semester;
    }

    public void setSemester(Integer semester) {
        this.semester = semester;
    }

    public String getCourseId() {
        return courseId;
    }

    public void setCourseId(String courseId) {
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
