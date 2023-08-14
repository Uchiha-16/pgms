package com.postgresql.pgms.DTO;

import java.time.LocalDate;
import java.util.Date;

public class NominationSaveDTO {

    private long userID;
    private String programId;
    private Integer semester;
    private String courseId;

    public NominationSaveDTO() {
    }

    public NominationSaveDTO(long userID, String programId, Integer semester, String courseId) {
        this.userID = userID;
        this.programId = programId;
        this.semester = semester;
        this.courseId = courseId;
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

}