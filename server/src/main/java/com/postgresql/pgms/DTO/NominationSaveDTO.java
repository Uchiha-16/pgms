package com.postgresql.pgms.DTO;

import com.postgresql.pgms.model.Users;

public class NominationSaveDTO {
    private long userID;
    private long programId;
    private String semester;
    private long courseId;

    public NominationSaveDTO() {
    }

    public NominationSaveDTO(long userID, long programId, String semester, long courseId) {
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
}