package com.postgresql.pgms.DTO;

import com.postgresql.pgms.model.Nominations;
import com.postgresql.pgms.model.Users;
import lombok.*;

import java.io.Serializable;
import java.time.LocalDate;
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class NominationApplyDTO implements Serializable {
    private Integer userId;
    private String programId;
    private String courseId;
    private Integer semester;
    //private long nominationId;
}