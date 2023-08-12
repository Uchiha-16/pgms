package com.postgresql.pgms.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Data
@Entity
@Table (name = "DeputyRegistrar")
public class deputyRegistrar {

    @Id
    private Long drId;
    private Long userId;
}
