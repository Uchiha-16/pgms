package com.postgresql.pgms.controller;

import com.postgresql.pgms.DTO.NominationDTO;
import com.postgresql.pgms.DTO.NominationSaveDTO;
import com.postgresql.pgms.Service.nominationService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/nominations")
public class nominationController {
    private nominationService nominationService;

    @PostMapping(path = "/apply")
    public ResponseEntity<String> saveNomination(@RequestBody NominationSaveDTO nominationSaveDTO){
       // nominationService.addNomination(nominationSaveDTO);
        return ResponseEntity.ok("Nomination OK");
    }

    @GetMapping(path = "/getAllNominations")
    public List <NominationDTO> getAllNominations(){
        List<NominationDTO> allNominations = nominationService.getAllNominations();
        return allNominations;
    }
}
