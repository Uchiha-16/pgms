package com.postgresql.pgms.model;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "ProgramIntake")
public class ProgramIntake {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id; // Primary key of the ProgramIntake table

    @ManyToOne
    @JoinColumn(name = "programID")
    private Program program; // Foreign key referencing Program table

    @ManyToOne
    @JoinColumn(name = "intakeID")
    private Intake intake; // Foreign key referencing Intake table

    public ProgramIntake() {
    }

    public ProgramIntake(Program program, Intake intake) {
        this.program = program;
        this.intake = intake;
    }
}