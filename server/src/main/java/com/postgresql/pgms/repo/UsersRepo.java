package com.postgresql.pgms.repo;

import com.postgresql.pgms.model.users;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource
public interface UsersRepo extends JpaRepository<users, Long> {
}
