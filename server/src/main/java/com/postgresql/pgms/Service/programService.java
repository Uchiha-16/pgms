package com.postgresql.pgms.Service;

import com.postgresql.pgms.DTO.ProgramDTO;

import java.util.List;

public interface programService {
    String saveProgram(ProgramDTO programDTO);

    List<ProgramDTO> getAllPrograms();
}
