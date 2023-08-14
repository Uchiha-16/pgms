package com.postgresql.pgms.Service;

import com.postgresql.pgms.DTO.CourseListResponseDTO;
import com.postgresql.pgms.model.course;
import com.postgresql.pgms.DTO.CourseSaveDTO;
import com.postgresql.pgms.repo.CourseRepo;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class courseService{

    private final CourseRepo courseRepo;

    //add course
    public String addCourse(CourseSaveDTO courseSaveDTO) {
        course course = new course(
                courseSaveDTO.getCourseNo(),
                courseSaveDTO.getCourseName(),
                courseSaveDTO.getSemester(),
                courseSaveDTO.getCredit(),
                courseSaveDTO.getHallName(),
                courseSaveDTO.getProgramId()
        );
        courseRepo.save(course);
        return "Course added successfully";
    }

    public CourseListResponseDTO getAllCourses() {
        List<Object> coursesList = courseRepo.findAllCourses();
        return new CourseListResponseDTO((coursesList));
    }
}
