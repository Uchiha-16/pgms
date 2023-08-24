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
    private long courseId ;
    private String courseNo;
    private String courseName;
    private Integer semester;
    private Integer credit;
    private String hallName;
    private String programId;

    public course(String courseNo, String courseName, Integer semester, Integer credit, String hallName, String programId) {
        this.courseNo = courseNo;
        this.courseName = courseName;
        this.semester = semester;
        this.credit = credit;
        this.hallName = hallName;
        this.programId = programId;
    }
}
