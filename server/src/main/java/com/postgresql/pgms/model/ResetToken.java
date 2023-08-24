package com.postgresql.pgms.model;

import com.postgresql.pgms.enumeration.TokenType;
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
@Table(name = "reset-token")
public class ResetToken {
    @Id
    @GeneratedValue
    private Integer id;
    private String token;

    @Enumerated(EnumType.STRING)
    @Builder.Default
    private TokenType tokenType = TokenType.RESET_PASSWORD;

    private boolean expired;
    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "user_id", referencedColumnName = "id" )
    private Users user;
}
