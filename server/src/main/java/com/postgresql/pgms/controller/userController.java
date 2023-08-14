package com.postgresql.pgms.controller;

import com.postgresql.pgms.DTO.UserDTO;
import com.postgresql.pgms.Service.UserService;
import com.postgresql.pgms.DTO.UserListResponseDTO;
import com.postgresql.pgms.model.Users;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/v1/users")
@RequiredArgsConstructor
public class userController {

    private final UserService service;

    @GetMapping("/users")
    public ResponseEntity<UserListResponseDTO> getUsers(){
        return ResponseEntity.ok(service.listusers());
    }

    @GetMapping("/users/{id}")
    public ResponseEntity<UserListResponseDTO> getUserByID(Integer id){
        return ResponseEntity.ok(service.getUserById(id));
    }
}

