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
@Table (name = "apply_nominations")
public class ApplyNomination {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long appId;
    @ManyToOne
    @JoinColumn(name = "user_id")
    private Users userId;
    @ManyToOne
    @JoinColumn(name = "nomination_id")
    private Nominations nominationId;
    @Builder.Default
    private String status = "Pending";

    @Builder.Default
    private LocalDate date = LocalDate.now();

    
}
