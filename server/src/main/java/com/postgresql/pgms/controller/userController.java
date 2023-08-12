package com.postgresql.pgms.controller;

import com.postgresql.pgms.DTO.UserDTO;
import com.postgresql.pgms.DTO.UserSaveDTO;
import com.postgresql.pgms.Service.userService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/users")
public class userController {
    private userService userService;

    @PostMapping(path = "/getUsers")
    public List<UserDTO> getAllUsers(@RequestBody UserSaveDTO userSaveDTO){
        List<UserDTO> allUsers = userService.getAllUsers();
        return allUsers;
    }

    @GetMapping(path = "/getUser/{id}")
    public UserDTO getUserById(@PathVariable long id){
        UserDTO userDTO = userService.getUserById(id);
        return userDTO;
    }
}

