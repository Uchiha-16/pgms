package com.postgresql.pgms.DTO;

public class NominationSaveDTO {
        private long courseId;
        private String courseName;
        private String description;
        private Boolean status;

        public NominationSaveDTO() {
        }

        public NominationSaveDTO(long courseId, String courseName, String description, Boolean status) {
            this.courseId = courseId;
            this.courseName = courseName;
            this.description = description;
            this.status = status;
        }

        public long getCourseId() {
            return courseId;
        }

        public void setCourseId(long courseId) {
            this.courseId = courseId;
        }

        public String getCourseName() {
            return courseName;
        }

        public void setCourseName(String courseName) {
            this.courseName = courseName;
        }

        public String getDescription() {
            return description;
        }

        public void setDescription(String description) {
            this.description = description;
        }

        public Boolean getStatus() {
            return status;
        }

        public void setStatus(Boolean status) {
            this.status = status;
        }
}
