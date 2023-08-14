package com.postgresql.pgms.model;
import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDate;

@Data
@Entity
@Table (name = "Nomination")
public class nomination {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long nominationid;
    private long userID;
    private long programId;
    private String semester;
    private long courseId;
    private String status = "Pending";
    private LocalDate date = LocalDate.now();

    public nomination() {
    }

    public nomination(long nominationid, long userID, long programId, String semester, long courseId, String status, LocalDate date) {
        this.nominationid = nominationid;
        this.userID = userID;
        this.programId = programId;
        this.semester = semester;
        this.courseId = courseId;
        this.status = status;
        this.date = date;
    }

    public nomination(long userID, long programId, String semester, long courseId) {
        this.userID = userID;
        this.programId = programId;
        this.semester = semester;
        this.courseId = courseId;
    }
}
