package com.postgresql.pgms.model;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "Course")
public class course {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer courseId ;
    private String courseNo;
    private String courseName;
    private Integer semester;
    private Integer credit;

    @ManyToOne
    @JoinColumn(name = "program_id")
    private program programId;

    public course(String courseNo, String courseName, Integer semester, Integer credit, program programId) {
        this.courseNo = courseNo;
        this.courseName = courseName;
        this.semester = semester;
        this.credit = credit;
        this.programId = programId;
    }

    public program getProgramId() {
        return programId;
    }

    public void setProgramId(program programId) {
        this.programId = programId;
    }

    public Integer getCourseId() {
        return courseId;
    }

    public void setCourseId(Integer courseId) {
        this.courseId = courseId;
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

    public Integer getSemester() {
        return semester;
    }

    public void setSemester(Integer semester) {
        this.semester = semester;
    }

    public Integer getCredit() {
        return credit;
    }

    public void setCredit(Integer credit) {
        this.credit = credit;
    }



}
