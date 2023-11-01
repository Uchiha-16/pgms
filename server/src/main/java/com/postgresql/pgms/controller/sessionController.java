package com.postgresql.pgms.controller;

import com.postgresql.pgms.DTO.SessionSaveDTO;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.postgresql.pgms.Service.sessionService;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/sessions")
public class sessionController {
        private final sessionService sessionService;

        //addsession
        @PostMapping(path = "/add")
        public ResponseEntity<String> addSession(@RequestBody SessionSaveDTO sessionSaveDTO){
            sessionService.addSession(sessionSaveDTO);
            return ResponseEntity.ok("Session added successfully.");
        }

        //getsession
        @GetMapping(path = "/get")
        public ResponseEntity<List> getSession(){
            return ResponseEntity.ok(sessionService.getSession());
        }

        //updateSession
        @PutMapping(path = "/update/{id}")
        public ResponseEntity<String> updateSession(@PathVariable Integer id, @RequestBody SessionSaveDTO sessionSaveDTO){
            sessionService.updateSession(id, sessionSaveDTO);
            return ResponseEntity.ok("Session updated successfully.");
        }

        //deleteSession
        @DeleteMapping(path = "/delete/{id}")
        public ResponseEntity<String> deleteSession(@PathVariable Integer id){
            sessionService.deleteSession(id);
            return ResponseEntity.ok("Session deleted successfully.");
        }
}
