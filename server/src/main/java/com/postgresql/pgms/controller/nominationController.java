package com.postgresql.pgms.controller;

import com.postgresql.pgms.DTO.NominationSaveDTO;

import com.postgresql.pgms.Service.nominationService;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/nominations")
public class nominationController {
    private nominationService nominationService;

    @PostMapping(path = "/addNominations")
    public String saveNomination(@RequestBody NominationSaveDTO nominationSaveDTO){
        String id=nominationService.addNomination(nominationSaveDTO);
        return id;
    }
}
