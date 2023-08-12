package com.postgresql.pgms.DTO;

public class NominationDTO {
    private long id;
    private long userID;
    private String programName;
    private String semester;
    private String courseName;

    public NominationDTO() {
    }

    public NominationDTO(long id, long userID, String programName, String semester, String courseName) {
        this.id = id;
        this.userID = userID;
        this.programName = programName;
        this.semester = semester;
        this.courseName = courseName;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
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
