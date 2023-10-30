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

    // apply for a nomination by lecturer
    @PostMapping("/add")
    public ResponseEntity<String> applyNomination(@RequestBody NominationApplyDTO nominationApplyDTO) {
        service.applyNominations(nominationApplyDTO);
        return ResponseEntity.ok("Applied successfully.");
    }

    //open a new nomination by PG coordinator
    @PostMapping("/open")
    public ResponseEntity<String> openNominations(@RequestBody NominationOpeningDTO nominationOpeningDTO) {
        service.addNewNomination(nominationOpeningDTO);
        return ResponseEntity.ok("Nomination added successfully.");
    }

    //accepting the nomination application
    @PutMapping("/accept/{appId}")
    public ResponseEntity<String> acceptNomination(@PathVariable long appId) {
        service.acceptNomination(appId);
        return ResponseEntity.ok("Nomination accepted successfully");
    }

    //rejecting the nomination application
    @PutMapping("/reject/{appId}")
    public ResponseEntity<String> rejectNomination(@PathVariable long appId) {
        service.rejectNomination(appId);
        return ResponseEntity.ok("Nomination rejected successfully");
    }


}
