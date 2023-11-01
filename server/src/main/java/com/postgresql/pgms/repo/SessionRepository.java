package com.postgresql.pgms.repo;

import com.postgresql.pgms.model.session;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.time.LocalDate;
import java.util.List;

public interface SessionRepository extends JpaRepository<session,Long> {

    @Query(value = "SELECT * FROM session s WHERE s.date = :localDate AND s.teach_id = :id", nativeQuery = true)
    List<session> findAllByDate(LocalDate localDate,Integer id);


}
