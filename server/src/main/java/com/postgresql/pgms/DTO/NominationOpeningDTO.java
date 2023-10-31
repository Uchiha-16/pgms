package com.postgresql.pgms.DTO;

import com.postgresql.pgms.model.course;
import com.postgresql.pgms.model.Users;
import lombok.*;

import java.io.Serializable;
import java.time.LocalDate;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class NominationOpeningDTO implements Serializable {

    private long nominationid;
    private Users user;
    private String programId;
    private Integer semester;
    private course course;
    private LocalDate opendate;
    private LocalDate closedate;
    private String nominationStatus;

}
