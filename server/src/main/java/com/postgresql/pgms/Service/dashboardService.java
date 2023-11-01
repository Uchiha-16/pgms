package com.postgresql.pgms.Service;

import com.postgresql.pgms.DTO.SessionTodayDTO;
import com.postgresql.pgms.enumeration.Role;
import com.postgresql.pgms.model.course;
import com.postgresql.pgms.model.session;
import com.postgresql.pgms.repo.CourseRepo;
import com.postgresql.pgms.repo.ProgramRepo;
import com.postgresql.pgms.repo.SessionRepository;
import com.postgresql.pgms.repo.UserRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Service
@AllArgsConstructor
public class dashboardService {
    private final UserRepository userRepository;
    private final SessionRepository sessionRepository;
    private final CourseRepo courseRepo;
    private final ProgramRepo programRepo;
    public Integer countCoursesDoneBy(Integer userId) {
        return userRepository.countById(userId);
    }

    public Long countPrograms() {
        return programRepo.count();
    }

    public Long countAllStaff(){
        return userRepository.count();
    }

    public Long countAllLecturers(){
        return userRepository.countByRole(Role.Lecturer);
    }

    public List<SessionTodayDTO> getAllSchedules(Integer userId) {
        LocalDate today = LocalDate.now();
        List<session> sessions = sessionRepository.findAllByDate(today, userId);
        List<SessionTodayDTO> sessionTodayDTOS = new ArrayList<>();

        for (session session : sessions) {
            SessionTodayDTO sessionTodayDTO = new SessionTodayDTO();
            sessionTodayDTO.setStartTime(session.getStartTime());
            sessionTodayDTO.setEndTime(session.getEndTime());

            // Retrieve course name by courseId
            String courseName = courseRepo.findById(session.getCourseId().getCourseId())
                    .orElse(new course()) // Handle if course not found
                    .getCourseName();
            sessionTodayDTO.setCourseName(courseName);

            sessionTodayDTOS.add(sessionTodayDTO);
        }

        return sessionTodayDTOS;
    }


}
