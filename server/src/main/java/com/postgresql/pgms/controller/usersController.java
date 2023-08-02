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

    @GetMapping("/getUsers/{id}")
    public users getUsersById(@PathVariable("id") long id){
        return repo.findById(id).orElse(null);
    }

    @PutMapping("/updateUsers/{id}")
    public users updateUsers(@PathVariable("id") long id, @RequestBody users users){
        users existingUsers = repo.findById(id).orElse(null);
        existingUsers.setFirstName(users.getFirstName());
        existingUsers.setLastName(users.getLastName());
        existingUsers.setEmail(users.getEmail());
        existingUsers.setPassword(users.getPassword());
        existingUsers.setRole(users.getRole());
        existingUsers.setContact(users.getContact());
        return repo.save(existingUsers);
    }

    @DeleteMapping("/deleteUsers/{id}")
    public String deleteUsers(@PathVariable("id") long id){
        repo.deleteById(id);
        return "Users deleted";
    }


}
