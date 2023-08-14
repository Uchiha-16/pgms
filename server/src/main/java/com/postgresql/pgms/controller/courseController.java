package com.postgresql.pgms.controller;

import com.postgresql.pgms.DTO.CourseListResponseDTO;
import com.postgresql.pgms.DTO.CourseSaveDTO;
import com.postgresql.pgms.Service.courseService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/courses")
public class courseController {
    private final courseService courseService;

    //addcourse
    @PostMapping(path = "/addcourse")
    public ResponseEntity<String> addCourse(@RequestBody CourseSaveDTO courseSaveDTO){
        return ResponseEntity.ok(courseService.addCourse(courseSaveDTO));
    }

    @GetMapping(path = "/viewcourses")
    public ResponseEntity<CourseListResponseDTO> getCourses(){
        return ResponseEntity.ok(courseService.getAllCourses());
    }
}
