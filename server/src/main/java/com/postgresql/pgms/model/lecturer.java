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
@Table(name = "lecturer")
public class lecturer{
    @Id
    @GeneratedValue
    private Integer id;
//    private Users user;
    private String qualification;
//    @ManyToMany(cascade = CascadeType.ALL)
//    @JoinTable(name = "lecturer_course",
//            joinColumns = @JoinColumn(name = "lecturer_user_id"),
//            inverseJoinColumns = @JoinColumn(name = "course_id"))
//    private List<Course> courses;

}
