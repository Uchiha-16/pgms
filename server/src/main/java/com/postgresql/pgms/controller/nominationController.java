package com.postgresql.pgms.controller;

import com.postgresql.pgms.DTO.NominationListResponseDTO;
import com.postgresql.pgms.DTO.NominationSaveDTO;
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


//    @PostMapping("/add")
//    public ResponseEntity<String> addNomination(@RequestBody NominationSaveDTO nominationSaveDTO) {
//        service.addNomination(nominationSaveDTO);
//        return ResponseEntity.ok("Nomination added successfully.");
//    }

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
    public ResponseEntity<String> addNomination(@RequestBody NominationSaveDTO nominationSaveDTO) {
        service.addNomination(nominationSaveDTO);
        return ResponseEntity.ok("Nomination added successfully.");
    }

}
