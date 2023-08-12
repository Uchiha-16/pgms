package com.postgresql.pgms.controller;

import com.postgresql.pgms.DTO.ProgramDTO;
import com.postgresql.pgms.Service.programService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/programs")
public class programController {
    private programService programService;

    @PostMapping(path = "/addProgram")
    public String saveProgram(@RequestBody ProgramDTO programDTO){
        String id=programService.saveProgram(programDTO);
        return id;
    }

    @GetMapping(path = "/getAllProgram")
    public List<ProgramDTO> getAllPrograms(){
        List<ProgramDTO> allPrograms = programService.getAllPrograms();
        return allPrograms;
    }
}
