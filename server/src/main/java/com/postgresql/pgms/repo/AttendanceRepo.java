package com.postgresql.pgms.repo;

import com.postgresql.pgms.model.Users;
import com.postgresql.pgms.model.attendance;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
public interface AttendanceRepo extends JpaRepository<attendance, Integer> {

        //get the list of attendance of the particular lecturer
        @Query(value = "SELECT * FROM attendance WHERE lecturer_id = ?1", nativeQuery = true)
        List<attendance> findAllLecturerAttendance(Integer id);

        //get the list of attendance if the staff id is null
        @Query(value = "SELECT * FROM attendance WHERE staff_id IS NULL", nativeQuery = true)
        List<attendance> findAllWithoutStaff();

        //get the list of attendance of the particular program
        @Query(value = "SELECT * FROM attendance WHERE program_id = ?1", nativeQuery = true)
        List<attendance> findAllCourseAttendance(Integer id);

}
