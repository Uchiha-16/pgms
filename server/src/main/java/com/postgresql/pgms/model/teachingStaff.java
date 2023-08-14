package com.postgresql.pgms.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Data
@Entity
@Table (name = "TeachingStaff")
public class teachingStaff {

    @Id
    private Long tsId;
    private Long userId;
}
