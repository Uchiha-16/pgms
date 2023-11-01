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
@Table(name = "Payment")
public class Payment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @OneToOne(cascade = CascadeType.ALL, optional = true)
    @JoinColumn(name = "session_id")
    private session session;

    private int forward;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "report_id")
    private Report report;
}
