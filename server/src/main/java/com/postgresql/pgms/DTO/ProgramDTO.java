package com.postgresql.pgms.DTO;

public class ProgramDTO {
    private long programID;
    private String name;

    public ProgramDTO() {
    }

    public ProgramDTO(long programID, String name) {
        this.programID = programID;
        this.name = name;
    }

    public long getProgramID() {
        return programID;
    }

    public void setProgramID(long programID) {
        this.programID = programID;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
