package com.postgresql.pgms.DTO;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalTime;
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class SessionTodayDTO {
    private LocalTime startTime;
    private LocalTime endTime;
    private String courseName;


}
