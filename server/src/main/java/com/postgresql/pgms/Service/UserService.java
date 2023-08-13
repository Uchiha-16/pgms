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
}
