package com.postgresql.pgms.Service;

import com.postgresql.pgms.DTO.NominationDTO;
import com.postgresql.pgms.DTO.NominationSaveDTO;
import com.postgresql.pgms.model.nomination;
import com.postgresql.pgms.repo.NominationRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Service
public class nominationServiceIMPL implements nominationService{
    @Autowired
    private NominationRepo nominationRepo;
    @Override
    public void addNomination(NominationSaveDTO nominationSaveDTO) {
        nomination nomination = new nomination(
                nominationSaveDTO.getUserID(),
                nominationSaveDTO.getProgramId(),
                nominationSaveDTO.getSemester(),
                nominationSaveDTO.getCourseId()
        );
        nomination.setStatus("Pending");  // Set default status
        nomination.setDate(LocalDate.now());  // Set current date
        nominationRepo.save(nomination);

    }

    @Override
    public List<NominationDTO> getAllNominations() {
        List<nomination> getNominations = nominationRepo.findAll();
        List<NominationDTO> nominationDTOList = new ArrayList<>();
        for (nomination a:getNominations){
            NominationDTO nominationDTO = new NominationDTO(
                    a.getNominationid(),
                    a.getUserID(),
                    a.getProgramId(),
                    a.getSemester(),
                    a.getCourseId(),
                    a.getStatus(),
                    a.getDate()
            );
            nominationDTOList.add(nominationDTO);
        }
        return nominationDTOList;
    }
}
