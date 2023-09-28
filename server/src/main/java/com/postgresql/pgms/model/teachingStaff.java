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
@Table (name = "TeachingStaff")
public class teachingStaff {

    @Id
    @OneToOne
    @JoinColumn(name = "user_id")
    private Users user;
}
