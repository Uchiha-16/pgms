package com.postgresql.pgms.Service;

import com.postgresql.pgms.DTO.NominationSaveDTO;
import com.postgresql.pgms.model.nomination;
import com.postgresql.pgms.repo.NominationRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class nominationServiceIMPL implements nominationService{
    @Autowired
    private NominationRepo nominationRepo;
    @Override
    public String addNomination(NominationSaveDTO nominationDTO) {
        nomination nomination = new nomination(
            nominationDTO.getCourseId(),
            nominationDTO.getCourseName(),
            nominationDTO.getDescription(),
            nominationDTO.getStatus()
        );
        nominationRepo.save(nomination);
        return nomination.getCourseName();
    }
}
