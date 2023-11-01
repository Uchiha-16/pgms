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
@Table(name = "Head")
public class head {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long hId ;
    private long userId;
}

