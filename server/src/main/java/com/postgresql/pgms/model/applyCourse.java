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
@Table (name = "ApplyCourse")
public class applyCourse {
    @Id
    private long appId;
    @ManyToOne
    @JoinColumn(name = "user_id")
    private Users user;

    private long nominationid;
    @Builder.Default
    private String status = "Pending";

    
}
