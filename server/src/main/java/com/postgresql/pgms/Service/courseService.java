package com.postgresql.pgms.Service;

import com.postgresql.pgms.model.Course;
import com.postgresql.pgms.DTO.CourseSaveDTO;
import com.postgresql.pgms.repo.CourseRepo;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class courseService{

    private final CourseRepo courseRepo;

    public void addCourse(CourseSaveDTO courseSaveDTO) {
        Course course = Course.builder()
            .courseNo(courseSaveDTO.getCourseNo())
            .courseName(courseSaveDTO.getCourseName())
            .semester(courseSaveDTO.getSemester())
            .credit(courseSaveDTO.getCredit())
            .hallName(courseSaveDTO.getHallName())
            .programId(courseSaveDTO.getProgramId())
            .build();

        courseRepo.save(course);
    }

    public List<Course> getAllCourses() {
        List<Course> coursesList = courseRepo.findAll();
        return (coursesList);
    }

    //delete course
    public void deleteCourse(Long id) {
        if (!courseRepo.existsById(id)){
            //error exception
        }
        courseRepo.deleteById(id);
    }
}