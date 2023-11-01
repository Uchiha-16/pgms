package com.postgresql.pgms.DTO;

import com.postgresql.pgms.model.Nominations;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class NominationDTO {
    private long nominationid;
    private long userID;
    private String programId;
    private Integer semester;
    private String courseId;
    private String status;
    private LocalDate date;

}
