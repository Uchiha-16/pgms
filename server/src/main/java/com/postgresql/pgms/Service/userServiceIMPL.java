package com.postgresql.pgms.Service;


import com.postgresql.pgms.DTO.UserDTO;
import com.postgresql.pgms.DTO.UserSaveDTO;
import com.postgresql.pgms.model.Users;
import com.postgresql.pgms.repo.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import java.util.ArrayList;
import java.util.List;
@Service
public abstract class userServiceIMPL implements userService {
    @Autowired
    private UserRepository userRepository;

    @Override
    public List<UserDTO> getAllUsers() {
        List<Users> getUsers = userRepository.findAll();
        List<UserDTO> userDTOList = new ArrayList<>();
        for (Users a:getUsers){
            UserDTO userDTO = new UserDTO(
                    a.getId(),
                    a.getFirstname(),
                    a.getLastname(),
                    a.getEmail(),
                    a.getPassword(),
                    a.getRole(),
                    a.getContact()
            );
            userDTOList.add(userDTO);
        }
        return userDTOList;
    }
}

