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

    @ManyToOne
    @JoinColumn(name = "intake_id")
    private Intake intakeID;
    private LocalDate date;
    private LocalTime startTime;
    private LocalTime endTime;
    private Integer hours;
    private String type;
    private String hallName;

    @ManyToOne
    @JoinColumn(name = "teach_id")
    private Users tsId;

    @ManyToOne
    @JoinColumn(name = "course_id")
    private course courseId;

    @Builder.Default
    @ManyToOne(optional = true)
    @JoinColumn(name = "staff_id")
    private Users staffID = null;

    @Builder.Default
    @ManyToOne(optional = true)
    @JoinColumn(name = "pc_id")
    private Users pcID = null;

    @Builder.Default
    private String status = "Pending";

    @OneToOne(cascade = CascadeType.ALL, optional = true)
    @JoinColumn(name = "payment_id")
    private Payment payment;

    public void setStaffId(Users users) {
        this.staffID = users;
    }

    public void setPcId(Users users) {
        this.pcID = users;
    }

    public void setStaffID(Users staff) {
        this.staffID = staff;
    }

    public void setTsId(Users ts) {
        this.tsId = ts;
    }

    public void setIntakeID(Intake intake) {
        this.intakeID = intake;
    }

}

