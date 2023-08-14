package com.postgresql.pgms.controller;

import com.postgresql.pgms.DTO.NominationDTO;
import com.postgresql.pgms.DTO.NominationSaveDTO;
import com.postgresql.pgms.Service.nominationService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/nominations")
public class nominationController {
    private nominationService nominationService;

    @PostMapping(path = "/apply")
    public long saveNomination(@RequestBody NominationSaveDTO nominationSaveDTO){
        long id=nominationService.addNomination(nominationSaveDTO);
        return id;
    }

    @GetMapping(path = "/getAllNominations")
    public List <NominationDTO> getAllNominations(){
        List<NominationDTO> allNominations = nominationService.getAllNominations();
        return allNominations;
    }
}
