package com.postgresql.pgms.DTO;

import com.postgresql.pgms.enumeration.Role;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jdk.jshell.Snippet;

public class UserDTO {
    private Integer id;

    private String firstname;

    private String lastname;

    private String email;

    private String password;

    @Enumerated(EnumType.STRING)
    private Role role;

    private String contact;

    private String profileImage = "user.png";

    public UserDTO(Integer id, String firstname, String lastname, String email, Role role, String contact, String profileImage) {

        this.id = id;
        this.firstname = firstname;
        this.lastname = lastname;
        this.email = email;
        this.role = role;
        this.contact = contact;
        this.profileImage = profileImage;
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

    public String getProfileImage() { return profileImage; }

    public void setProfileImage(String profileImage) {
        this.profileImage = profileImage;
    }

}

