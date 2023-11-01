package com.postgresql.pgms.repo;

import com.postgresql.pgms.model.program;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource
public interface ProgramRepo extends JpaRepository<program,Integer> {
}
