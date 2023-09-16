package com.postgresql.pgms.repo;

import com.postgresql.pgms.model.session;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.time.LocalDate;
import java.util.List;

public interface SessionRepository extends JpaRepository<session,Long> {

    List<session> findAllByDate(LocalDate localDate);
}
