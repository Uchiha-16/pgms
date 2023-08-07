package com.postgresql.pgms.repo;

import com.postgresql.pgms.model.nomination;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource
public interface NominationRepo extends JpaRepository<nomination, Long> {
}
