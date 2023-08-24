package com.postgresql.pgms.controller;

import com.postgresql.pgms.DTO.UserDTO;
import com.postgresql.pgms.Service.UserService;
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
    public ResponseEntity<List<Users>> getUsers(){
        return ResponseEntity.ok(service.listusers());
    }

    //get lecturerList
    @GetMapping("/lecturerList")
    public ResponseEntity<List<Users>> getLecturerList(){
        return ResponseEntity.ok(service.listlecturers());
    }

    //get staffList
    @GetMapping("/staffList")
    public ResponseEntity<List<Users>> getStaffList(){
        return ResponseEntity.ok(service.liststaff());
    }

    @GetMapping("getUser/{id}")
    public ResponseEntity<UserDTO> getUserByID(@PathVariable Integer id) {
        UserDTO userDTO = service.getUserDTOByID(id);
        if (userDTO != null) {
            return ResponseEntity.ok(userDTO);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}

