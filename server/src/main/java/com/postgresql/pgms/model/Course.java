package com.postgresql.pgms.model;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;
import java.util.Set;
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "Course")
public class Course {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long courseId ;
    private String courseNo;
    private String courseName;
    private Integer semester;
    private Integer credit;
    private String hallName;
    private String programId;

    @OneToMany(mappedBy = "course")
    private List<Nominations> nominations;

}
