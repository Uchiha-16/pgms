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

    @PutMapping("/updateUser/{id}")
    public ResponseEntity<Void> updateUser(@PathVariable Integer id, @RequestBody UserDTO userDTO) {
        service.updateUser(id, userDTO);
        return ResponseEntity.ok().build();
    }

    @DeleteMapping("/deleteUser/{id}")
    public ResponseEntity<Void> deleteUser(@PathVariable Integer id) {
        service.deleteUserWithTokens(id);
        return ResponseEntity.ok().build();
    }

    //Search
    // New endpoint for user search
    @GetMapping("/search")
    public ResponseEntity<List<Users>> searchUsers(@RequestParam String query) {
        List<Users> searchResults = service.searchUsers(query);
        return ResponseEntity.ok(searchResults);
    }
}

