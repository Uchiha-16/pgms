package com.postgresql.pgms.Service;

import com.postgresql.pgms.DTO.UserDTO;
import com.postgresql.pgms.DTO.UserListResponseDTO;
import com.postgresql.pgms.model.Users;
import com.postgresql.pgms.repo.UserRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import javax.swing.text.html.Option;
import java.util.Collections;
import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class UserService {

    //get all users from userService
    private final UserRepository repo;

    public List<Users> listusers() {
        List<Users> usersList = repo.findAll();
        return usersList;
    }

    public UserDTO getUserDTOByID(Integer id) {
        Optional<Users> userOptional = repo.findById(id);

        if (userOptional.isPresent()) {
            Users user = userOptional.get();
            return new UserDTO(user.getId(), user.getFirstname(), user.getLastname(), user.getEmail(), user.getRole(), user.getContact(), user.getProfileImage(), user.getEmployedDate());
        } else {
            return null;
        }
    }
}
