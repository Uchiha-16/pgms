package com.postgresql.pgms.Service;

import com.postgresql.pgms.DTO.CourseListResponseDTO;
import com.postgresql.pgms.DTO.NominationSaveDTO;
import com.postgresql.pgms.model.Nominations;
import com.postgresql.pgms.model.course;
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
        course course = new course();
        course.setCourseNo(courseSaveDTO.getCourseNo());
        course.setCourseName(courseSaveDTO.getCourseName());
        course.setSemester(courseSaveDTO.getSemester());
        course.setCredit(courseSaveDTO.getCredit());
        course.setHallName(courseSaveDTO.getHallName());
        course.setProgramId(courseSaveDTO.getProgramId());

        courseRepo.save(course);
    }

    public CourseListResponseDTO getAllCourses() {
        List<Object> coursesList = courseRepo.findAllCourses();
        return new CourseListResponseDTO((coursesList));
    }
}
