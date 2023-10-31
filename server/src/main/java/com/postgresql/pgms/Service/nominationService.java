package com.postgresql.pgms.Service;

import com.postgresql.pgms.DTO.NominationApplyDTO;
import com.postgresql.pgms.DTO.NominationOpeningDTO;
import com.postgresql.pgms.model.*;
import com.postgresql.pgms.repo.ApplyNominationRepo;
import com.postgresql.pgms.repo.CourseRepo;
import com.postgresql.pgms.repo.NominationRepo;
import com.postgresql.pgms.repo.UserRepository;
import jakarta.persistence.EntityNotFoundException;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class nominationService {

    private final NominationRepo repo;
    private final ApplyNominationRepo applyNominationRepo;
    private final UserRepository userRepository;
    private final CourseRepo courseRepo;

    //view All Nominations
    public List<Nominations> listnominations() {
        List<Nominations> nominationsList = repo.findAllByOrderByNominationidDesc();
        return nominationsList;
    }

    //view all nominations by user
    public List<Nominations> listnominationsByUser(Integer id) {
        Users user = userRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("User not found")); // Handle this exception properly
        List<Nominations> nominationsList = repo.findAllByUserId(user);
        return nominationsList;
    }

    //apply for a nomination
    public void applyNominations(NominationApplyDTO nominationApplyDTO) {
        // Look up the user by userID from the database
        Users user = userRepository.findById(nominationApplyDTO.getUserId())
                .orElseThrow(() -> new IllegalArgumentException("Invalid user ID"));
        // Look up the user by userID from the database
        Nominations nominations = repo.findById(nominationApplyDTO.getNominationId())
                .orElseThrow(() -> new IllegalArgumentException("Invalid user ID"));

        ApplyNomination applyNomination = ApplyNomination.builder()
                .userId(user)
                .nominationId(nominations)
                .build();

        applyNominationRepo.save(applyNomination);
    }

    //update Nomination Status
    public void acceptNomination(long appId) {
        ApplyNomination applyNomination = applyNominationRepo.findById(appId)
                .orElseThrow(() -> new EntityNotFoundException("Nomination not found"));

        applyNomination.setStatus("Accepted");
        applyNominationRepo.save(applyNomination);
    }

    public void rejectNomination(long appId) {
        ApplyNomination applyNomination = applyNominationRepo.findById(appId)
                .orElseThrow(() -> new EntityNotFoundException("Nomination not found"));

        applyNomination.setStatus("Rejected");
        applyNominationRepo.save(applyNomination);
    }

    //open New Nomination
    public void addNewNomination(NominationOpeningDTO nominationOpeningDTO) {
        // Look up the course by courseId from the database
        course courseEntity = courseRepo.findById(nominationOpeningDTO.getCourseId())
                .orElseThrow(() -> new IllegalArgumentException("Invalid course ID"));

        // Look up the user by userID from the database
        Users user = userRepository.findById(nominationOpeningDTO.getUserId())
                .orElseThrow(() -> new IllegalArgumentException("Invalid user ID"));

        Nominations nomination = Nominations.builder()
                .userId(user)
                .programId(nominationOpeningDTO.getProgramId())
                .semester(nominationOpeningDTO.getSemester())
                .courseId(courseEntity)
                .closedate(nominationOpeningDTO.getClosedate())
                .build();

        repo.save(nomination);
    }


    //close nomination
    public void closeNomination(long nomId) {
        Nominations nomination = repo.findById(nomId)
                .orElseThrow(() -> new EntityNotFoundException("Nomination not found"));

        nomination.setNominationStatus("closed");
        repo.save(nomination);
    }
}
