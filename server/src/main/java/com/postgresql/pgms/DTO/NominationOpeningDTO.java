package com.postgresql.pgms.DTO;

import com.postgresql.pgms.model.Course;
import com.postgresql.pgms.model.Users;
import jakarta.persistence.*;
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
    private Course course;
    @Builder.Default
    private LocalDate date = LocalDate.now();

    @Builder.Default
    private String nominationStatus = "Open";

}
