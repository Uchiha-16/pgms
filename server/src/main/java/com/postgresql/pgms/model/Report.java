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
@Table(name = "Report")
public class Report {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private LocalDate CreatedOn;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "staff_id")
    private Users staffId;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "pcId")
    private Users pcId;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "drId")
    private Users drId;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "headId")
    private Users headId;

}
