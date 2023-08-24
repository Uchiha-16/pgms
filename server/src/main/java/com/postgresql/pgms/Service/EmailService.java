package com.postgresql.pgms.Service;

import com.postgresql.pgms.auth.AuthenticationResponse;
import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;
import lombok.RequiredArgsConstructor;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

import java.io.UnsupportedEncodingException;

@Service
@RequiredArgsConstructor
public class EmailService {
    private final JavaMailSender mailSender;

    public AuthenticationResponse sendMail(String recipientEmail, String subject, String content) throws MessagingException, UnsupportedEncodingException {


        MimeMessage message = mailSender.createMimeMessage();
        MimeMessageHelper helper = new MimeMessageHelper(message);

        helper.setFrom("sahansalgado10@gmail.com", "PGMS");
        helper.setTo(recipientEmail);
        helper.setSubject(subject);
        helper.setText(content,true);
        mailSender.send(message);

        return AuthenticationResponse.builder()
                .message("Email Sent>>>>>>>>")
                .build();
    }
}
