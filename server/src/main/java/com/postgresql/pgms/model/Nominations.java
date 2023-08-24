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
    private String courseId;

    @Builder.Default
    private String status = "Pending";
    @Builder.Default
    private LocalDate date = LocalDate.now();

}

