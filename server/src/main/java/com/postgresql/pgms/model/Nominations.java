package com.postgresql.pgms.model;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table (name = "Nomination")
public class Nominations {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long nominationid;
    private long userID;
    private String programId;
    private Integer semester;
    private String courseId;
    private String status = "Pending";
    private LocalDate date = LocalDate.now();

    }

