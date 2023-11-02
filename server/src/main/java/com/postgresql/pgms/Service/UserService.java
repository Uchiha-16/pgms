package com.postgresql.pgms.Service;

import com.postgresql.pgms.DTO.UserDTO;
import com.postgresql.pgms.DTO.UserListResponseDTO;
import com.postgresql.pgms.model.Users;
import com.postgresql.pgms.repo.UserRepository;
import jakarta.transaction.Transactional;
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

    //get lecturerList from userService
    public List<Users> listlecturers() {
        List<Users> lecturerList = repo.findAllLecturers();
        return lecturerList;
    }

    //get staffList from userService
    public List<Users> liststaff() {
        List<Users> staffList = repo.findAllStaff();
        return staffList;
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

    public void updateUser(Integer id, UserDTO userDTO) {
        Optional<Users> userOptional = repo.findById(id);

        if (userOptional.isPresent()) {
            Users user = userOptional.get();
            user.setFirstname(userDTO.getFirstname());
            user.setLastname(userDTO.getLastname());
            user.setEmail(userDTO.getEmail());
            user.setRole(userDTO.getRole());
            user.setContact(userDTO.getContact());
            user.setProfileImage(userDTO.getProfileImage());
            repo.save(user);
        }
    }

    @Transactional
    public void deleteUserWithTokens(Integer userId) {
        Users user = repo.findById(userId).orElse(null);
        if (user != null) {
            repo.deleteTokensByUser(user);
            repo.deleteUser(user);
        }
    }

    //Search``````
    // New method for searching users by first name
    public List<Users> searchUsersByFirstName(String firstName) {
        return repo.findByFirstnameContaining(firstName);
    }


}
