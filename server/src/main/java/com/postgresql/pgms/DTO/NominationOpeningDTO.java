package com.postgresql.pgms.DTO;

import com.postgresql.pgms.model.course;
import com.postgresql.pgms.model.Users;
import jakarta.persistence.criteria.CriteriaBuilder;
import lombok.*;

import java.io.Serializable;
import java.time.LocalDate;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class NominationOpeningDTO implements Serializable {

    private long nominationid;
    private Integer userId;
    private String programId;
    private Integer semester;
    private Integer courseId;
    private LocalDate opendate;
    private LocalDate closedate;
    private String nominationStatus;

}
