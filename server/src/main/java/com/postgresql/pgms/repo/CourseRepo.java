package com.postgresql.pgms.repo;

import com.postgresql.pgms.model.course;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource
public interface CourseRepo extends JpaRepository<course,Integer> {
    @Query(value = "SELECT * FROM course c WHERE c.course_no = :courseNo", nativeQuery = true)
    course findByCourseNo(String courseNo);
}
