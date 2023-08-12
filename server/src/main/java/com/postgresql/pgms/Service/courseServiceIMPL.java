package com.postgresql.pgms.Service;

import com.postgresql.pgms.DTO.CourseDTO;
import com.postgresql.pgms.model.course;
import com.postgresql.pgms.DTO.CourseSaveDTO;
import com.postgresql.pgms.repo.CourseRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class courseServiceIMPL implements courseService{

    @Autowired
    private CourseRepo courseRepo;
    @Override
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
        return course.getCourseName();
    }

    @Override
    public List<CourseDTO> getAllCourses() {
        List<course> getCourse = courseRepo.findAll();
        List<CourseDTO> courseDTOList = new ArrayList<>();
        for (course a:getCourse){
            CourseDTO courseDTO = new CourseDTO(
                    a.getCourseId(),
                    a.getCourseNo(),
                    a.getCourseName(),
                    a.getSemester(),
                    a.getCredit(),
                    a.getHallName(),
                    a.getProgramId()
            );
            courseDTOList.add(courseDTO);
        }
        return courseDTOList;
    }
}
