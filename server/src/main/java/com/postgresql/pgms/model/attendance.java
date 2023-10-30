package com.postgresql.pgms.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table (name = "attendance")
public class attendance {
        @Id
        @GeneratedValue(strategy = GenerationType.AUTO)
        private Integer attendanceid;

        @OneToOne
        @JoinColumn(name = "session_id")
        private session session;

//        @ManyToOne
//        @JoinColumn(name = "program_id")
//        private program programID;

//        @ManyToOne
//        @JoinColumn(name = "lecturer_id")
//        private Users lecturerID;

        @ManyToOne
        @JoinColumn(name = "staff_id")
        private Users staffID;

        @ManyToOne
        @JoinColumn(name = "pc_id")
        private Users pcID;

        @Builder.Default
        private String status = "Pending";

        public void setStaffID(Integer staffId) {
                this.staffID = new Users();
                this.staffID.setUserId(staffId);
        }


        public void setPcID(Integer pcId) {
                this.pcID = new Users();
                this.pcID.setUserId(pcId);
        }
}
