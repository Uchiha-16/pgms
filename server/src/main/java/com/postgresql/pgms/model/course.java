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
    private String hallName;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "program_id")
    private program programId;

    public course(String courseNo, String courseName, Integer semester, Integer credit, String hallName, program programId) {
        this.courseNo = courseNo;
        this.courseName = courseName;
        this.semester = semester;
        this.credit = credit;
        this.hallName = hallName;
        this.programId = programId;
    }

    public program getProgramId() {
        return programId;
    }

    public void setProgramId(program programId) {
        this.programId = programId;
    }
}
