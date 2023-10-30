package com.postgresql.pgms.Service;

import com.postgresql.pgms.repo.AttendanceRepo;
import com.postgresql.pgms.model.attendance;
import jakarta.persistence.EntityNotFoundException;
import jakarta.transaction.Transactional;
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

    @Transactional
    public void updateStaffId(Integer staffId, Integer attendanceId) {
        attendance attendance = repo.findById(attendanceId).orElseThrow(() -> new EntityNotFoundException("Attendance not found"));
        attendance.setStaffID(staffId);
        repo.save(attendance);
    }

    @Transactional
    public void updatePcId(Integer pcId, Integer attendanceId) {
        attendance attendance = repo.findById(attendanceId).orElseThrow(() -> new EntityNotFoundException("Attendance not found"));
        attendance.setPcID(pcId);
        repo.save(attendance);
    }


}
