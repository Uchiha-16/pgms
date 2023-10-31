package com.postgresql.pgms.Service;

import com.postgresql.pgms.DTO.NominationApplyDTO;
import com.postgresql.pgms.DTO.NominationOpeningDTO;
import com.postgresql.pgms.model.ApplyNomination;
import com.postgresql.pgms.model.Course;
import com.postgresql.pgms.model.Nominations;
import com.postgresql.pgms.model.Users;
import com.postgresql.pgms.repo.ApplyNominationRepo;
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
    public void applyNominations(NominationApplyDTO nominationApplyDTO) {
        Users user = nominationApplyDTO.getUser(); // Retrieve user directly from DTO
        Nominations nominations = nominationApplyDTO.getNominations(); // Retrieve nominations directly from DTO
        ApplyNomination applyNomination = ApplyNomination.builder()
                .user(user)
                .nominations(nominations)
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
        Users user = nominationOpeningDTO.getUser(); // Retrieve user directly from DTO
        Course course = nominationOpeningDTO.getCourse(); // Retrieve course directly from DTO
        Nominations nomination = Nominations.builder()
                .user(user)
                .programId(nominationOpeningDTO.getProgramId())
                .semester(nominationOpeningDTO.getSemester())
                .course(course)
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
