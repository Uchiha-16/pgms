package com.postgresql.pgms.DTO;

import com.postgresql.pgms.model.Nominations;
import com.postgresql.pgms.model.Users;
import lombok.*;

import java.io.Serializable;
import java.time.LocalDate;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class NominationApplyDTO implements Serializable {

    private long appId;
    private Integer userId;
    private long nominationId;
    private String status;
    private LocalDate date;
}