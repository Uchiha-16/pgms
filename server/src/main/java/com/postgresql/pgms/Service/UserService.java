package com.postgresql.pgms.Service;

import com.postgresql.pgms.DTO.UserListResponseDTO;
import com.postgresql.pgms.repo.UserRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class UserService {

//get all users from userService
    private final UserRepository repo;
    public UserListResponseDTO listusers() {
        List<Object> usersList = repo.findAllUsers();
        return new UserListResponseDTO(usersList);
    }

//get user by Id
    public UserListResponseDTO getUserById(Integer id) {
        List<Object> usersList = repo.findUserById(id);
        return new UserListResponseDTO(usersList);
    }
}
