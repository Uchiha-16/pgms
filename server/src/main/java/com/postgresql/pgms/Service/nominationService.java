package com.postgresql.pgms.Service;
import com.postgresql.pgms.DTO.NominationSaveDTO;

public interface nominationService {
    String addNomination(NominationSaveDTO nominationDTO);
}
