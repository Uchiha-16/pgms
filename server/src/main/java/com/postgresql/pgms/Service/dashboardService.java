package com.postgresql.pgms.Service;

import com.postgresql.pgms.enumeration.Role;
import com.postgresql.pgms.model.session;
import com.postgresql.pgms.repo.ProgramRepo;
import com.postgresql.pgms.repo.SessionRepository;
import com.postgresql.pgms.repo.UserRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;

@Service
@AllArgsConstructor
public class dashboardService {
    private final UserRepository userRepository;
    private final SessionRepository sessionRepository;
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

    public List<session> getAllSchedules(Integer id){
        List<session> sessionList = sessionRepository.findAllByDate(LocalDate.now(),id);
        return (sessionList);
    }


}
