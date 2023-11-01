package com.postgresql.pgms.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "ProgramIntake")
public class ProgramIntake {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id; // Primary key of the ProgramIntake table

    @ManyToOne
    @JoinColumn(name = "programID")
    private com.postgresql.pgms.model.program program; // Foreign key referencing Program table

    @ManyToOne
    @JoinColumn(name = "intakeID")
    private Intake intake; // Foreign key referencing Intake table

//    public ProgramIntake() {
//    }

    public ProgramIntake(com.postgresql.pgms.model.program program, Intake intake) {
        this.program = program;
        this.intake = intake;
    }
}
