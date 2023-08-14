package com.postgresql.pgms.auth;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.postgresql.pgms.Service.EmailService;
import com.postgresql.pgms.assets.EmailTemplate;
import com.postgresql.pgms.config.JwtService;
import com.postgresql.pgms.exception.CustomErrorException;
import com.postgresql.pgms.model.Token;
import com.postgresql.pgms.repo.ResetRepository;
import com.postgresql.pgms.repo.TokenRepository;
import com.postgresql.pgms.enumeration.TokenType;
import com.postgresql.pgms.model.Users;
import com.postgresql.pgms.repo.UserRepository;
import jakarta.mail.MessagingException;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.io.UnsupportedEncodingException;

@Service
@RequiredArgsConstructor
public class AuthenticationService {

    private final UserRepository repository;
    private final TokenRepository tokenRepository;
    private final ResetRepository resetRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;

    private final Integer refreshExpiration = 604800000; //for cookie
    private final UserRepository userRepository;
    private final EmailService emailService;

    public AuthenticationResponse register(RegisterRequest request) {
        var user = Users.builder()
                .firstname(request.getFirstname())
                .lastname(request.getLastname())
                .email(request.getEmail())
                .password(passwordEncoder.encode(request.getPassword()))
                .role(request.getRole())
                .contact(request.getContact())
                .build();
        var saveduser = repository.save(user);
        var jwtToken = jwtService.generateToken(user);
        var refreshToken = jwtService.generateRefreshToken(user);
        saveUserToken(saveduser, jwtToken); //after this need to create cookie
        return AuthenticationResponse.builder()     //sam just send a responsedto
                .accessToken(jwtToken)
                .refreshToken(refreshToken)
                .role(user.getRole())
                .id(user.getId())
                .message("Sign up success!!!!!!!!!!!!!!!!")
                .build();
    }



    public AuthenticationResponse authenticate(AuthenticationRequest request, HttpServletResponse response) { //plus response
//        System.out.println(request);
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        request.getEmail(),
                        request.getPassword()
                )
        );

        var user = repository.findByEmail(request.getEmail())
                .orElseThrow();
        var jwtToken = jwtService.generateToken(user);
        var refreshToken = jwtService.generateRefreshToken(user);

        createCookie(response, refreshToken, refreshExpiration/1000); //cookie
        revokeAllUserTokens(user);
        saveUserToken(user,jwtToken);   //update
        return AuthenticationResponse.builder()
                .accessToken(jwtToken)
                .refreshToken(refreshToken)     //dont put ref
                .role(user.getRole())
                .id(user.getId())
                .message("login Success!!!!!!!!!!!!!")
                .build();
    }

    public AuthenticationResponse forgotPassword(HttpServletResponse response, String email) throws MessagingException, UnsupportedEncodingException {//=======================================================================================================
        var user = userRepository.findByEmail(email).orElseThrow(() -> new CustomErrorException("User Not Found"));//create exception
        var token = jwtService.generateForgotPasswordToken(user);//create func
        emailService.sendMail(email, "Reset Password", EmailTemplate.PasswordResetEmailTemplate("http://localhost:3000/reset-password/" + token));//mail
        revokeResetTokens(user);
        saveResetToken(user, token);//create
        return AuthenticationResponse.builder()
                .message("Forgot password Email sent!!!!!!!!")
                .build();
    }

    public AuthenticationResponse resetPassword(HttpServletResponse response, String password, String token) {//========================================================================================

        var reset = resetRepository.findByToken(token).orElseThrow(() -> new CustomErrorException("Token Not Found"));//create exception

        if (reset.isExpired()) {
            return AuthenticationResponse.builder()
                    .message("Token Expired!!!!!!!!")
                    .build();
        }

//        if (password.equals("Token Check")) {
//            return GlobalService.response("Alert", "Token Valid");//use authresponse
//        }

        var email = jwtService.extractEmail(token);
        var user = userRepository.findByEmail(email).orElseThrow(() -> new CustomErrorException("User Not Found"));//create exception
        user.setPassword(passwordEncoder.encode(password));
        userRepository.save(user);

        reset.setExpired(true);
        resetRepository.save(reset);//reset repo

        return AuthenticationResponse.builder()
                .message("Success password reseted!!!!!!!!")
                .build();
    }

    private void createCookie(HttpServletResponse response, String refreshToken, int refreshExpiration) {
        Cookie refreshCookie = new Cookie("refreshToken",refreshToken);
        refreshCookie.setMaxAge(refreshExpiration);
        refreshCookie.setPath("/");
        refreshCookie.setHttpOnly(true);
        response.addCookie(refreshCookie);
    }

    private void revokeAllUserTokens(Users user){
        var validUserTokens= tokenRepository.findAllValidTokensByUser(user.getId());
        if (validUserTokens.isEmpty())
            return;
        validUserTokens.forEach(t -> {
            t.setExpired(true);
            t.setRevoked(true);
        });

        tokenRepository.saveAll(validUserTokens);
    }

    private void  revokeResetTokens(Users user) {//========================================================
        var validResetTokens = resetRepository.findAllValidResetTokensByUser(user.getId());
        if(validResetTokens.isEmpty())
            return;
        validResetTokens.forEach(token -> {
            token.setExpired(true);
        });
        resetRepository.saveAll(validResetTokens);
    }

    private void saveUserToken(Users user, String jwtToken) {
        var token = Token.builder()
                .user(user)
                .token(jwtToken)
                .tokenType(TokenType.BEARER)
                .expired(false)
                .revoked(false)
                .build();
        tokenRepository.save(token);
    }

    public void refreshToken(
            HttpServletRequest request,
            HttpServletResponse response
    ) throws IOException
    {
//        final String authHeader = request.getHeader(HttpHeaders.AUTHORIZATION);  //cookie
        String refreshToken = null;
        final String userEmail;
        
        refreshToken = getRefreshFromCookie(request);

        if(refreshToken == null) {
            return;
        }
//        if (authHeader == null || !authHeader.startsWith("Bearer ")){   //must do with cookies
//            return;
//        }
//        refreshToken=authHeader.substring(7);
        userEmail = jwtService.extractEmail(refreshToken);
        if (userEmail != null){
            var user = this.repository.findByEmail(userEmail).orElseThrow();

            if(jwtService.isTokenValid(refreshToken, user)){
               var accessToken = jwtService.generateToken(user);
                revokeAllUserTokens(user);
                saveUserToken(user,accessToken);    //use update instead
               var authResponse = AuthenticationResponse.builder()  //if use cookie no need refrestoken to be insert here. & this is useed in refresh react...
                       .accessToken(accessToken)
                       .refreshToken(refreshToken)
                       .role(user.getRole())
                       .id(user.getId())
                       .message("Refresh Success!!!!!!!!!!!!!")
                       .build();
               new ObjectMapper().writeValue(response.getOutputStream(), authResponse);
            }
        }
    }

    private String getRefreshFromCookie(HttpServletRequest request) {
        Cookie[] cookies = request.getCookies();
        if(cookies !=null){
            for (Cookie cookie : cookies){
                if (cookie.getName().equals("refreshToken")){
                    return cookie.getValue();
                }
            }

        }
        return null;
    }

    public AuthenticationResponse logout(HttpServletRequest request, HttpServletResponse response) {

        SecurityContextHolder.clearContext();

        final String authHeader = request.getHeader("Authorization");
        final String jwt;

        if(authHeader == null || !authHeader.startsWith("Bearer ")) {
            return AuthenticationResponse.builder()
                    .message("Logout Authentication Error")
                    .build();
        }

        jwt = authHeader.substring(7);
        var email = jwtService.extractEmail(jwt);
        var user = this.userRepository.findByEmail(email).orElseThrow();

        revokeAllUserTokens(user);
        createCookie(response, "", 0);
        return AuthenticationResponse.builder()
                .message("Logout Successful!!!!!!!!")
                .build();
    }
}
