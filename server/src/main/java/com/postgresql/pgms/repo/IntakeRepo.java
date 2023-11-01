package com.postgresql.pgms.repo;

import com.postgresql.pgms.model.Intake;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.List;

@RepositoryRestResource
public interface IntakeRepo extends JpaRepository<Intake,Integer> {
    //find previous intakes
    @Query(value = "SELECT * FROM intake WHERE CAST(SUBSTRING(year, 6, 9) AS INTEGER) < 2023", nativeQuery = true)
    List<Intake> findIntakesBeforeYear2023();

    //find current intake
    @Query(value = "SELECT * FROM intake WHERE CAST(SUBSTRING(year, 6, 9) AS INTEGER) >= 2023", nativeQuery = true)
    List<Intake> findIntake();

}
