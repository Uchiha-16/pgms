package com.postgresql.pgms.Service;

import com.postgresql.pgms.DTO.CourseDTO;
import com.postgresql.pgms.DTO.CourseSaveDTO;
import com.postgresql.pgms.DTO.NominationDTO;
import com.postgresql.pgms.DTO.NominationSaveDTO;

import java.util.List;

public interface courseService {
    String addCourse(CourseSaveDTO courseSaveDTO);

    List<CourseDTO> getAllCourses();
}
