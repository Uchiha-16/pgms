package com.postgresql.pgms.controller;

import java.util.List;

import com.postgresql.pgms.model.users;
import com.postgresql.pgms.repo.UsersRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/users")
public class usersController {

    @Autowired
    UsersRepo repo;

    @PostMapping("/addUsers")
    public void addLecturer(@RequestBody users users){
        repo.save(users);
    }

    @GetMapping("/getUsers")
    public List<users> getAllUsers(){
        return repo.findAll();
    }
}
