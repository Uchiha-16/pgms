package com.postgresql.pgms.model;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table (name = "Staff")
public class staff {

    @Id
    @OneToOne
    @JoinColumn(name = "user_id")
    private Users user;
}
