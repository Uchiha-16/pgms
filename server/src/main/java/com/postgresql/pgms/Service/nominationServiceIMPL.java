package com.postgresql.pgms.Service;

import com.postgresql.pgms.DTO.NominationDTO;
import com.postgresql.pgms.DTO.NominationSaveDTO;
import com.postgresql.pgms.model.nomination;
import com.postgresql.pgms.repo.NominationRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class nominationServiceIMPL implements nominationService{
    @Autowired
    private NominationRepo nominationRepo;
    @Override
    public String addNomination(NominationSaveDTO nominationSaveDTO) {
        nomination nomination = new nomination(
                nominationSaveDTO.getUserID(),
                nominationSaveDTO.getProgramName(),
                nominationSaveDTO.getSemester(),
                nominationSaveDTO.getCourseName()
        );
        nominationRepo.save(nomination);
        return nomination.getCourseName();
    }

    @Override
    public List<NominationDTO> getAllNominations() {
        List<nomination> getNominations = nominationRepo.findAll();
        List<NominationDTO> nominationDTOList = new ArrayList<>();
        for (nomination a:getNominations){
            NominationDTO nominationDTO = new NominationDTO(
                    a.getId(),
                    a.getUserID(),
                    a.getProgramName(),
                    a.getSemester(),
                    a.getCourseName()
            );
            nominationDTOList.add(nominationDTO);
        }
        return nominationDTOList;
    }
}
