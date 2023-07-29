package com.postgresql.pgms.controller;

import java.util.List;

import com.postgresql.pgms.model.lecturer;
import com.postgresql.pgms.repo.LecturerRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/lecturer")
public class lecturerController {

    @Autowired
    LecturerRepo repo;

    @PostMapping("/addLecturers")
    public void addLecturer(@RequestBody lecturer lecturer){
        repo.save(lecturer);
    }

    @GetMapping("/getLecturers")
    public List<lecturer> getAllLecturers(){
        return repo.findAll();
    }
}
