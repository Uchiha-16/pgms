package com.postgresql.pgms.Service;

import com.postgresql.pgms.DTO.NominationListResponseDTO;
import com.postgresql.pgms.repo.NominationRepo;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class nominationService {

    //get all nominations from nominationService
    private final NominationRepo repo;
    public NominationListResponseDTO listnominations() {
        List<Object> nominationsList = repo.getAllNominations();
        return new NominationListResponseDTO(nominationsList);
    }
}
