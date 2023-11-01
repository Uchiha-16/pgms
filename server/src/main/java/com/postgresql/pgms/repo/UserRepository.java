package com.postgresql.pgms.repo;

import com.postgresql.pgms.DTO.UserDTO;
import com.postgresql.pgms.enumeration.Role;
import com.postgresql.pgms.model.ResetToken;
import com.postgresql.pgms.model.Users;
import com.postgresql.pgms.model.Token;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.transaction.annotation.Transactional;


import java.util.Optional;
import java.util.List;

@RepositoryRestResource
public interface UserRepository extends JpaRepository<Users, Integer> {

    Optional<Users> findById(Long id);

    Optional<Users> findByEmail(String email);

    List<Users> findAllByOrderByIdDesc();

    @Query("""
    select u from Users u where u.role = 'Lecturer' or u.role = 'VisitingLecturer' or u.role = 'PCMIT' or u.role = 'PCMCS' or u.role = 'PCMIS' or u.role = 'PCMBA'
    """)
    List<Users> findAllLecturers();

    @Query("""
    select u from Users u where u.role = 'Staff'
    """)
    List<Users> findAllStaff();

    //get count of courses by lecturer
    @Query(value = """
    select count(course_id) from lecturer_course group by lecturer_user_id
    """,nativeQuery = true)
    Integer countById(Integer id);

    //get count of lecturers
    Long countByRole(Role role);

    //query to delete user with cascading
    @Transactional
    @Modifying
    @Query("DELETE FROM Token t WHERE t.user = :user")
    void deleteTokensByUser(Users user);

    @Transactional
    @Modifying
    @Query("DELETE FROM Users u WHERE u = :user")
    void deleteUser(Users user);

    //Search
    // Custom query method for user search
    @Query("""
    SELECT u FROM Users u 
    WHERE 
        (u.firstname LIKE %:keyword% OR u.lastname LIKE %:keyword%) 
    AND
        (u.role = :role OR :role IS NULL)
    """)
    List<Users> searchUsersByKeywordAndRole(String keyword, String role);
}
