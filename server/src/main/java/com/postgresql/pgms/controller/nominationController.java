package com.postgresql.pgms.controller;

import com.postgresql.pgms.model.nomination;
import com.postgresql.pgms.repo.NominationRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/nomination")
public class nominationController {
    @Autowired
    NominationRepo repo;

    @PostMapping("/addNomination")
    public void addLecturer(@RequestBody nomination nomination){
        repo.save(nomination);
    }
}
