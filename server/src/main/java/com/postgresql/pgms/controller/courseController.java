package com.postgresql.pgms.controller;

import com.postgresql.pgms.DTO.CourseSaveDTO;
import com.postgresql.pgms.DTO.CourseDTO;
import com.postgresql.pgms.Service.courseService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/courses")
public class courseController {
    private courseService courseService;

    @PostMapping(path = "/addCourse")
    public String saveCourse(@RequestBody CourseSaveDTO courseSaveDTO){
        String id=courseService.addCourse(courseSaveDTO);
        return id;
    }

    @GetMapping(path = "/getAllCourses")
    public List <CourseDTO> getAllCourses(){
        List<CourseDTO> allCourses = courseService.getAllCourses();
        return allCourses;
    }
}
