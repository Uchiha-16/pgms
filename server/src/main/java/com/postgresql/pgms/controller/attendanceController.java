package com.postgresql.pgms.controller;

import com.postgresql.pgms.Service.attendanceService;

import com.postgresql.pgms.model.attendance;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/attendance")
public class attendanceController {

    private final attendanceService attendanceService;

    //get attendance of a particular lecturer
    @GetMapping(path = "/getLecturerAttendance/{id}")
    public ResponseEntity<List<attendance>> getAttendance(@PathVariable Integer id){
        return ResponseEntity.ok(attendanceService.getLecturerAttendance(id));
    }

    @GetMapping(path = "/getAttendance")
    public ResponseEntity<List<attendance>> getAttendance(){
        return ResponseEntity.ok(attendanceService.getAllAttendance());
    }

    //get attendance of a particular program
    @GetMapping(path = "/getCourseAttendance/{id}")
    public ResponseEntity<List<attendance>> getCourseAttendance(@PathVariable Integer id){
        return ResponseEntity.ok(attendanceService.getCourseAttendance(id));
    }

    //adding a session




}
