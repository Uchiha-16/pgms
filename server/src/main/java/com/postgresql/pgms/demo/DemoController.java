package com.postgresql.pgms.demo;

import com.postgresql.pgms.model.Users;
import com.postgresql.pgms.repo.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("api/v1/demo-controller")
@RequiredArgsConstructor
public class DemoController {


    private final UserRepository repo;

    @GetMapping
    public ResponseEntity<String> sayHello(){

        return ResponseEntity.ok("Hello from Secure point");
    }

    @GetMapping("/users")
    public ResponseEntity<Optional<Users>> getAllUsers(){
        var Users = repo.findByEmail("sahan@gmail.com");
        return ResponseEntity.ok(Users);
    }

}
