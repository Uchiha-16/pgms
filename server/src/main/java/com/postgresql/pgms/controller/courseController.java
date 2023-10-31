package com.postgresql.pgms.controller;

import com.postgresql.pgms.DTO.CourseSaveDTO;
import com.postgresql.pgms.Service.courseService;
import com.postgresql.pgms.model.course;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/courses")
public class courseController {
    private final courseService courseService;

    //addcourse
    @PostMapping(path = "/add")
    public ResponseEntity<String> addCourse(@RequestBody CourseSaveDTO courseSaveDTO){
        courseService.addCourse(courseSaveDTO);
        return ResponseEntity.ok("Course added successfully.");
    }

    @GetMapping(path = "/viewcourses")
    public ResponseEntity<List<course>> getCourses(){
        return ResponseEntity.ok(courseService.getAllCourses());
    }

    @DeleteMapping("/delete/{id}")
    public void deleteCourse(@PathVariable Long id){
        courseService.deleteCourse(id);
    }
}
