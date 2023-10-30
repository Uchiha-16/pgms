package com.postgresql.pgms.controller;

import com.postgresql.pgms.DTO.NominationApplyDTO;
import com.postgresql.pgms.DTO.NominationOpeningDTO;
import com.postgresql.pgms.Service.nominationService;
import com.postgresql.pgms.model.Nominations;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/nominations")
@RequiredArgsConstructor
public class nominationController {

    private final nominationService service;

    @GetMapping("/nominations")
    public ResponseEntity<List<Nominations>> getAllNominations(){
        return ResponseEntity.ok(service.listnominations());
    }

    //get the list of nominations of the particular user
    @GetMapping("/nominations/{id}")
    public ResponseEntity<List<Nominations>> getAllNominationsByUser(@PathVariable("id") Integer id){
        return ResponseEntity.ok(service.listnominationsByUser(id));
    }

    @PostMapping("/add")
    public ResponseEntity<String> addNomination(@RequestBody NominationApplyDTO nominationApplyDTO) {
        service.applyNominations(nominationApplyDTO);
        return ResponseEntity.ok("Nomination added successfully.");
    }

    @PostMapping("/open")
    public ResponseEntity<String> openNominations(@RequestBody NominationOpeningDTO nominationOpeningDTO) {
        service.addNewNomination(nominationOpeningDTO);
        return ResponseEntity.ok("Nomination added successfully.");
    }


}
