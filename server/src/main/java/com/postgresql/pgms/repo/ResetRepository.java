package com.postgresql.pgms.repo;

import com.postgresql.pgms.model.ResetToken;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface ResetRepository extends JpaRepository<ResetToken, Integer> {
    Optional<ResetToken> findByToken(String token);

    @Query("""
    select t from ResetToken t inner join Users u on t.user.id = u.id
    where u.id = :userId and (t.expired = false ) and t.tokenType = 'RESET_PASSWORD'
""")
    List<ResetToken> findAllValidResetTokensByUser(Integer userId);

}
