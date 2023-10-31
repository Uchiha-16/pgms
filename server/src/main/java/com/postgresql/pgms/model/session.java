package com.postgresql.pgms.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.time.LocalTime;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "Session")
public class session {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer sessionId ;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "intake_id")
    private Intake intakeID;
    private LocalDate date;
    private LocalTime startTime;
    private LocalTime endTime;
    private Integer hours;
    private String type;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "teach_id")
    private Users tsId;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "course_id")
    private course courseId;

    @OneToOne(cascade = CascadeType.ALL, optional = true)
    @JoinColumn(name = "staff_id")
    private Users staffID;

    @OneToOne(cascade = CascadeType.ALL, optional = true)
    @JoinColumn(name = "pc_id")
    private Users pcID;

    @Builder.Default
    private String status = "Pending";

    public void setStaffId(Users users) {
        this.staffID = users;
    }

    public void setPcId(Users users) {
        this.pcID = users;
    }
}

