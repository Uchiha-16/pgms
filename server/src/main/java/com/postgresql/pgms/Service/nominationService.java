package com.postgresql.pgms.Service;

import com.postgresql.pgms.DTO.NominationApplyDTO;
import com.postgresql.pgms.DTO.NominationOpeningDTO;
import com.postgresql.pgms.DTO.NominationSaveDTO;
import com.postgresql.pgms.model.Course;
import com.postgresql.pgms.model.applyCourse;
import com.postgresql.pgms.model.Nominations;
import com.postgresql.pgms.model.Users;
import com.postgresql.pgms.repo.CourseRepo;
import com.postgresql.pgms.repo.NominationRepo;
import com.postgresql.pgms.repo.UserRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class nominationService {

    private final NominationRepo repo;
    private final CourseRepo courseRepo;
    private final UserRepository userRepository;

    //view All Nominations
    public List<Nominations> listnominations() {
        List<Nominations> nominationsList = repo.findAllByOrderByNominationidDesc();
        return nominationsList;
    }

    //view all nominations by user
    public List<Nominations> listnominationsByUser(Integer id) {
        Users user = userRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("User not found")); // Handle this exception properly
        List<Nominations> nominationsList = repo.findAllByUser(user);
        return nominationsList;
    }

    //apply for a nomination
//    public void applyNominations(NominationApplyDTO nominationApplyDTO) {
//        Users user = userRepository.findById(nominationApplyDTO.getUserID())
//                .orElseThrow(() -> new RuntimeException("User not found")); // Handle this exception properly
//
//        applyCourse applycourse = applyCourse.builder()
//                .user(user)
//                .programId(nominationApplyDTO.getProgramId())
//                .semester(nominationApplyDTO.getSemester())
//                .courseId(nominationApplyDTO.getCourseId())
//                .build();
//
//        repo.save(applycourse);
//    }

    //update Nomination Status
    public void updateNominationStatus(){

    }

    //open New Nomination
    public void addNewNomination(NominationOpeningDTO nominationOpeningDTO) {
        Users user = nominationOpeningDTO.getUser(); // Retrieve user directly from DTO
        Course course = nominationOpeningDTO.getCourse(); // Retrieve course directly from DTO
        Nominations nomination = Nominations.builder()
                .user(user)
                .programId(nominationOpeningDTO.getProgramId())
                .semester(nominationOpeningDTO.getSemester())
                .course(course)
                .build();

        repo.save(nomination);
    }
}
