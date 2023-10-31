package com.postgresql.pgms.repo;

import com.postgresql.pgms.model.Nominations;
import com.postgresql.pgms.model.Users;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.List;

@RepositoryRestResource
public interface NominationRepo extends JpaRepository<Nominations, Long> {

    //get the list of nominations in order of the descending order of the nomination id
    List<Nominations> findAllByOrderByNominationidDesc();

    //get the list of nominations of the particular user
    List<Nominations> findAllByUserId(Users user);

}
