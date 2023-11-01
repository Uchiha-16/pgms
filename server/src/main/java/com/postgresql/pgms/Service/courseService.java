package com.postgresql.pgms.Service;

import com.postgresql.pgms.model.course;
import com.postgresql.pgms.DTO.CourseSaveDTO;
import com.postgresql.pgms.model.program;
import com.postgresql.pgms.repo.CourseRepo;
import com.postgresql.pgms.repo.ProgramRepo;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class courseService{

    private final CourseRepo courseRepo;
    private final ProgramRepo programRepo;

    public void addCourse(CourseSaveDTO courseSaveDTO) {
        course course = new course();
        course.setCourseNo(courseSaveDTO.getCourseNo());
        course.setCourseName(courseSaveDTO.getCourseName());
        course.setSemester(courseSaveDTO.getSemester());
        course.setCredit(courseSaveDTO.getCredit());

        // Look up the program by programId from the database
        program program = programRepo.findById(courseSaveDTO.getProgramId())
                .orElseThrow(() -> new IllegalArgumentException("Invalid programId"));

        // Set the program for the course
        course.setProgramId(program);

        courseRepo.save(course);
    }


    public List<course> getAllCourses() {
        List<course> coursesList = courseRepo.findAll();
        return (coursesList);
    }

    //delete course
    public void deleteCourse(Integer id) {
        if (!courseRepo.existsById(id)){
            //error exception
        }
        courseRepo.deleteById(id);
    }
}