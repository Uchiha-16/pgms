package com.postgresql.pgms.DTO;

public class NominationSaveDTO {
    private long userID;
    private String programName;
    private String semester;
    private String courseName;

    public NominationSaveDTO() {
    }

    public NominationSaveDTO(long userID, String programName, String semester, String courseName) {
        this.userID = userID;
        this.programName = programName;
        this.semester = semester;
        this.courseName = courseName;
    }

    public long getUserID() {
        return userID;
    }

    public void setUserID(long userID) {
        this.userID = userID;
    }

    public String getProgramName() {
        return programName;
    }

    public void setProgramName(String programName) {
        this.programName = programName;
    }

    public String getSemester() {
        return semester;
    }

    public void setSemester(String semester) {
        this.semester = semester;
    }

    public String getCourseName() {
        return courseName;
    }

    public void setCourseName(String courseName) {
        this.courseName = courseName;
    }
}