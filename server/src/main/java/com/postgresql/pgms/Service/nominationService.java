package com.postgresql.pgms.Service;
import com.postgresql.pgms.DTO.NominationDTO;
import com.postgresql.pgms.DTO.NominationSaveDTO;

import java.util.List;

public interface nominationService {
    String addNomination(NominationSaveDTO nominationDTO);

    List<NominationDTO> getAllNominations();
}
