package com.postgresql.pgms.DTO;

import com.postgresql.pgms.enumeration.Role;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;

public class UserDTO {
    private Integer id;

    private String firstname;

    private String lastname;

    private String email;

    private String password;

    @Enumerated(EnumType.STRING)
    private Role role;

    private String contact;

    public UserDTO(int id, String firstname, String lastname, String email, String password, Role role, String contact) {
        this.id = id;
        this.firstname = firstname;
        this.lastname = lastname;
        this.email = email;
        this.password = password;
        this.role = role;
        this.contact = contact;
    }

    public long getID() { return id; }

    public void setID(int id) {
        this.id = id;
    }

    public String getFirstname() { return firstname; }

    public void setFirstname(String firstname) {
        this.firstname = firstname;
    }

    public String getLastname() { return lastname; }

    public void setLastname(String lastname) {
        this.lastname = lastname;
    }

    public String getEmail() { return email; }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() { return password; }

    public void setPassword(String password) {
        this.password = password;
    }

    public Role getRole() { return role; }

    public void setRole(Role role) {
        this.role = role;
    }

    public String getContact() { return contact; }

    public void setContact(String contact) {
        this.contact = contact;
    }

}

