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

    private Integer userId;
    private Integer programId;
    private Integer semester;
    private Integer courseId;
    private LocalDate closedate;

}
