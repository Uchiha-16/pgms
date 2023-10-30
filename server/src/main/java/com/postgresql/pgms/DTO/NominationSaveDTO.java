package com.postgresql.pgms.DTO;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.io.Serializable;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class NominationSaveDTO implements Serializable {
    private String programId;
    private Integer semester;
    private String courseId;

}
