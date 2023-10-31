package com.postgresql.pgms.DTO;

public class SessionDTO {
    private Integer sessionId;
    private Integer staffID;

    public SessionDTO(Integer sessionId, Integer staffId) {
        this.sessionId = sessionId;
        this.staffID = staffId;
    }

    public SessionDTO() {
    }

    public Integer getSessionId() {
        return sessionId;
    }

    public Integer getStaffId() {
        return staffID;
    }


    public void setSessionId(Integer sessionId) {
        this.sessionId = sessionId;
    }

}
