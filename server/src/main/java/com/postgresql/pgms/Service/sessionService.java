package com.postgresql.pgms.Service;

import com.postgresql.pgms.DTO.SessionSaveDTO;
import com.postgresql.pgms.model.Intake;
import com.postgresql.pgms.model.Users;
import com.postgresql.pgms.model.course;
import com.postgresql.pgms.model.session;
import com.postgresql.pgms.repo.*;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class sessionService {

    private final CourseRepo courseRepo;
    private final UserRepository userRepo;
    private final SessionRepo sessionRepo;
    private final IntakeRepo intakeRepo;

    //addSession
    public void addSession(SessionSaveDTO sessionSaveDTO) {
        session session = new session();
        session.setDate(sessionSaveDTO.getDate());
        session.setStartTime(sessionSaveDTO.getStartTime());
        session.setEndTime(sessionSaveDTO.getEndTime());
        session.setHours(sessionSaveDTO.getHours());
        session.setType(sessionSaveDTO.getType());
        session.setStatus(sessionSaveDTO.getStatus());
        session.setHallName(sessionSaveDTO.getHallName());

        // Look up the intake by intakeId from the database
        Intake intake = intakeRepo.findById(sessionSaveDTO.getIntakeID())
                .orElseThrow(() -> new IllegalArgumentException("Invalid intakeId"));
        if (intake == null) {
            // Handle the case where the course is not found
            // For example, you can return an error response or throw a custom exception
            throw new IllegalArgumentException("Intake not found for courseId: " + sessionSaveDTO.getIntakeID());
        }

        // Set the intake for the session
        session.setIntakeID(intake);


        // Look up the course by courseId from the database
        course course = courseRepo.findById(sessionSaveDTO.getCourseId())
                .orElseThrow(() -> new IllegalArgumentException("Invalid courseId"));


        if (course == null) {
            // Handle the case where the course is not found
            // For example, you can return an error response or throw a custom exception
            throw new IllegalArgumentException("Course not found for courseId: " + sessionSaveDTO.getCourseId());
        }

        // Set the course for the session
        session.setCourseId(course);


        // Look up the user by tsID from the database
        Users ts = userRepo.findById(sessionSaveDTO.getTsId())
                .orElseThrow(() -> new IllegalArgumentException("Invalid tsID"));
        // Set the user for the session
        session.setTsId(ts);

        //set staffID and pcID to null
        session.setStaffID(null);
        session.setPcId(null);

        // Check for overlapping sessions
        if (hasOverlappingSession(session)) {
            throw new IllegalArgumentException("Overlapping session exists");
        }

        sessionRepo.save(session);
    }

    //getSession
    public List<session> getSession() {
        List<session> sessionList = sessionRepo.findAll();
        return (sessionList);
    }

    //updateSession
    public void updateSession(Integer id, SessionSaveDTO sessionSaveDTO){
        // Look up the session by id from the database
        session sessionToUpdate = sessionRepo.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Invalid session ID"));

        // Update session properties with values from sessionSaveDTO
        sessionToUpdate.setStartTime(sessionSaveDTO.getStartTime());
        sessionToUpdate.setEndTime(sessionSaveDTO.getEndTime());
        sessionToUpdate.setHours(sessionSaveDTO.getHours());

        //Check for overlapping sessions
        if (hasOverlappingSession(sessionToUpdate)) {
            throw new IllegalArgumentException("Overlapping session exists");
        }

        // Save the updated session back to the database
        sessionRepo.save(sessionToUpdate);
    }

    //deleteSession
    public void deleteSession(Integer id){
        // Look up the session by id from the database
        session sessionToDelete = sessionRepo.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Invalid session ID"));

        // Delete the session from the database
        sessionRepo.delete(sessionToDelete);
    }

    private boolean hasOverlappingSession(session newSession) {
        // Query the database to find sessions with the same hall number and teaching staff
        List<session> existingSessions = sessionRepo.findByHallNameAndTsId(
                newSession.getHallName(), newSession.getTsId()
        );

        // Check for overlaps
        for (session existingSession : existingSessions) {
            if (isOverlap(newSession, existingSession)) {
                return true;
            }
        }
        return false;
    }

    private boolean isOverlap(session session1, session session2) {
        // Check if session1's end time is after session2's start time
        // and session1's start time is before session2's end time
        return session1.getEndTime().isAfter(session2.getStartTime()) &&
                session1.getStartTime().isBefore(session2.getEndTime());
    }
}
