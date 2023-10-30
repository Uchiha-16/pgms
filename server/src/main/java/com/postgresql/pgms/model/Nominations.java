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
@Table (name = "nomination")
public class Nominations {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long nominationid;
    @ManyToOne
    @JoinColumn(name = "user_id")
    private Users user;
    private String programId;
    private Integer semester;
    @ManyToOne
    @JoinColumn(name = "course_id")
    private Course course;
    @Builder.Default
    private LocalDate date = LocalDate.now();

    @Builder.Default
    private String nominationStatus = "Open";

}

