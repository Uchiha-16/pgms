package com.postgresql.pgms.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Data
@Entity
@Table (name = "TeachnicalAssistant")
public class teachnicalAssistant {

    @Id
    private Long taId;
    private Long userId;
}
