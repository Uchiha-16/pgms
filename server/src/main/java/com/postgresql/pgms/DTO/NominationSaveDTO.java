package com.postgresql.pgms.DTO;

import java.io.Serializable;

public class NominationSaveDTO implements Serializable {

    private Integer userID;
    private String programId;
    private Integer semester;
    private String courseId;

    public NominationSaveDTO() {
    }

    public NominationSaveDTO(Integer userID, String programId, Integer semester, String courseId) {
        this.userID = userID;
        this.programId = programId;
        this.semester = semester;
        this.courseId = courseId;
    }

    public Integer getUserID() {
        return userID;
    }

    public void setUserID(Integer userID) {
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
}
