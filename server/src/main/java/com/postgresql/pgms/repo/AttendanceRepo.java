package com.postgresql.pgms.repo;

import com.postgresql.pgms.model.session;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
public interface AttendanceRepo extends JpaRepository<session, Integer> {

        //get the list of attendance of the particular lecturer
        @Query(value = "SELECT * FROM session WHERE teach_id = ?1", nativeQuery = true)
        List<session> findAllLecturerAttendance(Integer id);

        //get the list of attendance if the staff id is null
        @Query(value = "SELECT * FROM session WHERE staff_id IS NULL", nativeQuery = true)
        List<session> findAllWithoutStaff();

        //get the list of attendance of the particular program
        @Query(value = "SELECT * FROM session WHERE program_id = ?1", nativeQuery = true)
        List<session> findAllCourseAttendance(Integer id);

}
