package com.postgresql.pgms.Service;

import com.postgresql.pgms.DTO.UserDTO;

import java.util.List;

public interface userService {
    //get all users
    List<UserDTO> getAllUsers();

    //get user by id
    UserDTO getUserById(long id);

    //save user
    long saveUser(UserDTO userDTO);

    //update user
    long updateUser(UserDTO userDTO);

}
