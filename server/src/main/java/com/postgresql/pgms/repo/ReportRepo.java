package com.postgresql.pgms.repo;

import com.postgresql.pgms.model.Report;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ReportRepo extends JpaRepository<Report, Integer> {
}
