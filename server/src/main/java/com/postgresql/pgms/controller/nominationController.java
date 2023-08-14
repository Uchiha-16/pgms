package com.postgresql.pgms.controller;

import com.postgresql.pgms.DTO.NominationDTO;
import com.postgresql.pgms.DTO.NominationListResponseDTO;
import com.postgresql.pgms.DTO.NominationSaveDTO;
import com.postgresql.pgms.DTO.UserListResponseDTO;
import com.postgresql.pgms.Service.nominationService;
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
    public ResponseEntity<NominationListResponseDTO> getAllNominations(){
        return ResponseEntity.ok(service.listnominations());
    }
}
