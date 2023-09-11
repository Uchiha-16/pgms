package com.postgresql.pgms.Service;

import com.postgresql.pgms.repo.AttendanceRepo;
import com.postgresql.pgms.model.attendance;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class attendanceService {

    private final AttendanceRepo repo;

    public List<attendance> getLecturerAttendance(Integer id) {
        List<attendance> attendanceList = repo.findAllLecturerAttendance(id);
        return attendanceList;
    }

    public List<attendance> getAllAttendance() {
        List<attendance> attendanceList = repo.findAll();
        return attendanceList;
    }

    public List<attendance> getCourseAttendance(Integer id) {
        List<attendance> attendanceList = repo.findAllCourseAttendance(id);
        return attendanceList;
    }
}
