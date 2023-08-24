package com.postgresql.pgms.repo;

import com.postgresql.pgms.DTO.UserDTO;
import com.postgresql.pgms.model.ResetToken;
import com.postgresql.pgms.model.Users;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;


import java.util.Optional;
import java.util.List;

@RepositoryRestResource
public interface UserRepository extends JpaRepository<Users, Integer> {

    Optional<Users> findById(Long id);

    Optional<Users> findByEmail(String email);

    List<Users> findAllByOrderByIdDesc();

    @Query("""
    select u from Users u where u.role = 'Lecturer'
    """)
    List<Users> findAllLecturers();

    @Query("""
    select u from Users u where u.role = 'Staff'
    """)
    List<Users> findAllStaff();

}
