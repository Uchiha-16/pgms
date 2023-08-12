package com.postgresql.pgms.DTO;

public class CourseSaveDTO {
    private String courseNo;
    private String courseName;
    private long semester;
    private Integer credit;
    private String hallName;
    private long programId;

    public CourseSaveDTO() {
    }

    public CourseSaveDTO(String courseNo, String courseName, long semester, Integer credit, String hallName, long programId) {
        this.courseNo = courseNo;
        this.courseName = courseName;
        this.semester = semester;
        this.credit = credit;
        this.hallName = hallName;
        this.programId = programId;
    }

    public String getCourseNo() {
        return courseNo;
    }

    public void setCourseNo(String courseNo) {
        this.courseNo = courseNo;
    }

    public String getCourseName() {
        return courseName;
    }

    public void setCourseName(String courseName) {
        this.courseName = courseName;
    }

    public long getSemester() {
        return semester;
    }

    public void setSemester(long semester) {
        this.semester = semester;
    }

    public Integer getCredit() {
        return credit;
    }

    public void setCredit(Integer credit) {
        this.credit = credit;
    }

    public String getHallName() {
        return hallName;
    }

    public void setHallName(String hallName) {
        this.hallName = hallName;
    }

    public long getProgramId() {
        return programId;
    }

    public void setProgramId(long programId) {
        this.programId = programId;
    }
}