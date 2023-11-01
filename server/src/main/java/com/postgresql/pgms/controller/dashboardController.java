package com.postgresql.pgms.controller;

import com.postgresql.pgms.DTO.UserDTO;
import com.postgresql.pgms.Service.UserService;
import com.postgresql.pgms.Service.dashboardService;
import com.postgresql.pgms.model.session;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/dashboard")
public class dashboardController {
    private final dashboardService dashboardService;
    private final UserService userService;

    //get User Name
    @GetMapping("getUser/{id}")
    public ResponseEntity<String> getUserByID(@PathVariable Integer id) {
        UserDTO userDTO = userService.getUserDTOByID(id);
        if (userDTO != null) {
            return ResponseEntity.ok(userDTO.getFirstname());
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    //get special events

    //get course count by Lecturer
    @GetMapping("{id}")
    public Integer getCourseCount(@PathVariable("id") Integer id){
        return dashboardService.countCoursesDoneBy(id);
    }

    //get Count of All Staff
    @GetMapping("/allstaff")
    public Long countAllStaff(){
        return dashboardService.countAllStaff();
    }

    //get Count of All Lecturers
    @GetMapping("/lecturers")
    public Long countAllLecturers(){
        return dashboardService.countAllLecturers();
    }

    //get Count of All Programs
    @GetMapping("/allPrograms")
    public Long countAllPrograms(){
        return dashboardService.countPrograms();
    }

    //get today's schedule by lecturer ID
    @GetMapping("/schedule/{id}")
    public ResponseEntity<List<session>> getAllSchedules(@PathVariable("id") Integer id){
        return ResponseEntity.ok(dashboardService.getAllSchedules(id));
    }

}
