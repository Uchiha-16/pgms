package com.postgresql.pgms.model;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table (name = "Nomination")
public class nomination {
    @Id
    @GeneratedValue
    private long nominationid;
    private long userID;
    private long programId;
    private String semester;
    private long courseId;
    private String status = "Pending";
    private LocalDate date = LocalDate.now();

    public nomination(long userID, long programId, String semester, long courseId) {
        this.userID = userID;
        this.programId = programId;
        this.semester = semester;
        this.courseId = courseId;
    }
}
