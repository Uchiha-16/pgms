package com.postgresql.pgms.auth;

import jakarta.mail.MessagingException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.io.UnsupportedEncodingException;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/v1/auth")
@RequiredArgsConstructor
public class AuthenticationController {

    private final AuthenticationService service;

    @PostMapping("/register")
    public ResponseEntity<AuthenticationResponse> register(
            @RequestBody RegisterRequest request
            ){
        return ResponseEntity.ok(service.register(request));  //here sam passed response also
    }

    @PostMapping("/authenticate")
    public ResponseEntity<AuthenticationResponse> authenticate(
            @RequestBody AuthenticationRequest request,
            HttpServletResponse response
    ){
        return ResponseEntity.ok(service.authenticate(request, response));    //sam passed response

    }

    @PostMapping("/logout")
    public ResponseEntity<AuthenticationResponse> logout(
            HttpServletRequest request,
            HttpServletResponse response

    ){
        return ResponseEntity.ok(service.logout(request, response));
    }

    @GetMapping("/refreshToken")
    public void refreshToken(
            HttpServletRequest request,
            HttpServletResponse response
    ) throws IOException {
        service.refreshToken(request,response);
    }

    @PostMapping("/forgot-password")//======================================================================================================================================================
    public ResponseEntity<AuthenticationResponse> forgotPassword(
            HttpServletResponse response,
            @RequestBody AuthenticationRequest request
    ) throws MessagingException, UnsupportedEncodingException {
        return ResponseEntity.ok(service.forgotPassword(response, request.getEmail()));
    }

    @PostMapping("/reset-password/{token}")//======================================================================================================================================
    public ResponseEntity<AuthenticationResponse> resetPassword(
            HttpServletResponse response,
            @RequestBody AuthenticationRequest request,
            @PathVariable String token
    ) {
        return ResponseEntity.ok(service.resetPassword(response, request.getPassword(), token));
    }
}
