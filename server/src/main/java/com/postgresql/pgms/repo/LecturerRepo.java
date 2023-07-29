package com.postgresql.pgms.repo;

import com.postgresql.pgms.model.lecturer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource
public interface LecturerRepo extends JpaRepository<lecturer, Long> {
}
