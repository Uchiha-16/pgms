package com.postgresql.pgms.controller;

import com.postgresql.pgms.DTO.SessionDTO;
import com.postgresql.pgms.Service.attendanceService;

import com.postgresql.pgms.model.session;
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
    public ResponseEntity<List<session>> getAttendance(@PathVariable Integer id) {
        return ResponseEntity.ok(attendanceService.getLecturerAttendance(id));
    }

    @GetMapping(path = "/getAttendance")
    public ResponseEntity<List<session>> getAttendance() {
        return ResponseEntity.ok(attendanceService.getAllAttendance());
    }

    //get attendance of a particular program
    @GetMapping(path = "/getCourseAttendance/{id}")
    public ResponseEntity<List<session>> getCourseAttendance(@PathVariable Integer id) {
        return ResponseEntity.ok(attendanceService.getCourseAttendance(id));
    }

    //Stuff marking the attendance
    @PutMapping(path = "/updateStaffId/{sessionId}/{staffID}")
    public ResponseEntity<Void> updateStaffId(@PathVariable Integer sessionId, @PathVariable Integer staffID) {
        attendanceService.updateStaffId(sessionId, staffID);
        return ResponseEntity.ok().build();
    }

    //PC marking the attendance
    @PutMapping(path = "/updatePcId/{sessionId}/{pcID}")
    public ResponseEntity<Void> updatePcId(@PathVariable Integer sessionId, @PathVariable Integer pcID) {
        attendanceService.updatePcId(sessionId, pcID);
        return ResponseEntity.ok().build();
    }

}
