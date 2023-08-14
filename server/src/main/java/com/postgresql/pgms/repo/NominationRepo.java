package com.postgresql.pgms.repo;

import com.postgresql.pgms.model.nomination;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.List;

@RepositoryRestResource
public interface NominationRepo extends JpaRepository<nomination, Integer> {

    @Query("""
    SELECT n.courseId , n.date, n.programId , n.status FROM nomination n ORDER BY n.nominationid DESC
    """)
    List<Object> getAllNominations();

}
