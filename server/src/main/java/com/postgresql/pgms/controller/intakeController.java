package com.postgresql.pgms.controller;

import com.postgresql.pgms.DTO.IntakeSaveDTO;
import com.postgresql.pgms.Service.courseService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.postgresql.pgms.Service.intakeService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/intake")
public class intakeController {
    private final intakeService IntakeService;

    //addIntake
    @PostMapping(path = "/add")
    public ResponseEntity<String> addIntake(@RequestBody IntakeSaveDTO IntakeSaveDTO) {
        IntakeService.addIntake(IntakeSaveDTO);
        return ResponseEntity.ok("Intake added successfully.");
    }

    //getIntake
    @GetMapping(path = "/get")
    public ResponseEntity<?> getIntake() {
        return ResponseEntity.ok(IntakeService.getIntake());
    }

    //getCurrentIntake
    @GetMapping(path = "/getCurrentIntake")
    public ResponseEntity<?> getCurrentIntake() {
        return ResponseEntity.ok(IntakeService.getCurrentIntake());
    }
}
