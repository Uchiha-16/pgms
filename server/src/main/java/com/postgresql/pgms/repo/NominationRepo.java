package com.postgresql.pgms.repo;

import com.postgresql.pgms.model.Nominations;
import com.postgresql.pgms.model.Users;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.List;

@RepositoryRestResource
public interface NominationRepo extends JpaRepository<Nominations, Integer> {

    @Query("""
    SELECT n.courseId, n.date, n.programId, n.status, n.userID, u.firstname, u.lastname
    FROM Nominations n
    JOIN Users u ON n.userID = u.id
    ORDER BY n.nominationid DESC
    """)
    List<Object> getAllNominations();
}
