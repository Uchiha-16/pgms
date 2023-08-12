package com.postgresql.pgms.model;
import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table (name = "Nomination")
public class nomination {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;
    private long userID;
    private String programName;
    private String semester;
    private String courseName;

    //date and status to be added

    public nomination() {
    }

    public nomination(long id, long userID, String programName, String semester, String courseName) {
        this.id = id;
        this.userID = userID;
        this.programName = programName;
        this.semester = semester;
        this.courseName = courseName;
    }

    public nomination(long userID, String programName, String semester, String courseName) {
        this.userID = userID;
        this.programName = programName;
        this.semester = semester;
        this.courseName = courseName;
    }
}
