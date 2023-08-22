package com.postgresql.pgms.Service;

import com.postgresql.pgms.DTO.NominationListResponseDTO;
import com.postgresql.pgms.DTO.NominationSaveDTO;
import com.postgresql.pgms.DTO.UserDTO;
import com.postgresql.pgms.model.Nominations;
import com.postgresql.pgms.model.Users;
import com.postgresql.pgms.repo.NominationRepo;
import com.postgresql.pgms.repo.UserRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class nominationService {

    private final NominationRepo repo;
    private final UserRepository userRepository;

    public List<Nominations> listnominations() {
        List<Nominations> nominationsList = repo.findAll();
        return nominationsList;
    }

    public void addNomination(NominationSaveDTO nominationSaveDTO) {
        Users user = userRepository.findById(nominationSaveDTO.getUserID())
                .orElseThrow(() -> new RuntimeException("User not found")); // Handle this exception properly

        Nominations nomination = Nominations.builder()
                .user(user)
                .programId(nominationSaveDTO.getProgramId())
                .semester(nominationSaveDTO.getSemester())
                .courseId(nominationSaveDTO.getCourseId())
                .build();

        repo.save(nomination);
    }
}
