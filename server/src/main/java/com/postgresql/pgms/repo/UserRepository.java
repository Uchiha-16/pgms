package com.postgresql.pgms.repo;

import com.postgresql.pgms.model.Users;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import com.postgresql.pgms.DTO.UserDTO;

import java.util.Optional;
import java.util.List;

@RepositoryRestResource
public interface UserRepository extends JpaRepository<Users, Integer> {

    Optional<Users> findByEmail(String email);
    Optional<Users> findAllByOrderByIdDesc();

    @Query("""
    SELECT u.firstname , u.lastname, u.email , u.role FROM Users u ORDER BY u.id DESC
    """)
    List<Object> findAllUsers();
}
