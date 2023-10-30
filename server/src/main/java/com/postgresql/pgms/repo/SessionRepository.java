package com.postgresql.pgms.repo;

import com.postgresql.pgms.model.session;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.time.LocalDate;
import java.util.List;

public interface SessionRepository extends JpaRepository<session,Long> {

    @Query(value = """
    select * from session where date=:localDate and tsId=:id
    """, nativeQuery = true)
    List<session> findAllByDate(@Param("localDate") LocalDate localDate, @Param("id") Integer id);
}
