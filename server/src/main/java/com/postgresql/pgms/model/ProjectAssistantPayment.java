package com.postgresql.pgms.model;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "ProjectAssistantPayment")
public class ProjectAssistantPayment {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long scheduleID;

    private String assistantName;
    private String recommendation;

    public ProjectAssistantPayment() {
    }

    public ProjectAssistantPayment(String assistantName, String recommendation) {
        this.assistantName = assistantName;
        this.recommendation = recommendation;
    }
}
