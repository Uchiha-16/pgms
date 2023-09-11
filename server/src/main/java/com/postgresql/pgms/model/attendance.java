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
@Table (name = "attendance")
public class attendance {
        @Id
        @GeneratedValue(strategy = GenerationType.AUTO)
        private long attendanceid;

        @ManyToOne
        @JoinColumn(name = "session_id")
        private session session;

        @ManyToOne
        @JoinColumn(name = "program_id")
        private program programID;

        @OneToOne
        @JoinColumn(name = "lecturer_id")
        private lecturer lecturerID;

        @OneToOne
        @JoinColumn(name = "staff_id")
        private staff staffID;

        @OneToOne
        @JoinColumn(name = "pc_id")
        private programCordinator pcID;

        @Builder.Default
        private String status = "Pending";
}
