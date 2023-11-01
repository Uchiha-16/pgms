package com.postgresql.pgms.repo;

import com.postgresql.pgms.model.Users;
import com.postgresql.pgms.model.session;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import java.util.List;

public interface SessionRepo extends JpaRepository<session, Integer> {

    // Find sessions with the same hall number and teaching staff
    @Query("SELECT s FROM session s WHERE s.hallName = :hallName OR s.tsId = :tsId")
    List<session> findByHallNameAndTsId(String hallName, Users tsId);
}
