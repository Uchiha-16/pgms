package com.postgresql.pgms.Service;

import com.postgresql.pgms.model.Users;
import com.postgresql.pgms.model.session;
import com.postgresql.pgms.repo.AttendanceRepo;
import com.postgresql.pgms.repo.UserRepository;
import jakarta.persistence.EntityNotFoundException;
import jakarta.transaction.Transactional;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class attendanceService {

    private final AttendanceRepo repo;
    private final UserRepository userRepo;

    public List<session> getLecturerAttendance(Integer id) {
        List<session> attendanceList = repo.findAllLecturerAttendance(id);
        return attendanceList;
    }

    public List<session> getAllAttendance() {
        List<session> attendanceList = repo.findAll();
        return attendanceList;
    }

    public List<session> getCourseAttendance(Integer id) {
        List<session> attendanceList = repo.findAllSessionsByProgramId(id);
        return attendanceList;
    }

    @Transactional
    public void updateStaffId(Integer sessionId, Integer staffID) {
        session session = repo.findById(sessionId).orElseThrow(() -> new EntityNotFoundException("Session not found"));
        Users users = userRepo.findById(staffID).orElseThrow(() -> new EntityNotFoundException("User not found"));
        session.setStaffId(users); // This line should be updated
        repo.save(session);
    }

    @Transactional
    public void updatePcId(Integer sessionId, Integer pcID) {
        session session = repo.findById(sessionId).orElseThrow(() -> new EntityNotFoundException("Session not found"));
        Users users = userRepo.findById(pcID).orElseThrow(() -> new EntityNotFoundException("User not found"));
        session.setPcId(users);
        //status should be changed to Marked
        session.setStatus("Marked");
        repo.save(session);
    }

}
