package com.postgresql.pgms.assets;

public class EmailTemplate {
    public static String PasswordResetEmailTemplate(String Link ) {

        return "<html>"
                + "<head>"
                + "<style>"
                + "body { font-family: Arial, sans-serif; background-color: #f4f4f4; margin: 0; padding: 0; }"
                + ".container { max-width: 600px; margin: 0 auto; padding: 20px; }"
                + ".header { background-color: #007bff; color: #fff; text-align: center; padding: 10px 0; }"
                + ".content { background-color: #fff; padding: 20px; border-radius: 5px; box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); }"
                + "a { color: #007bff; text-decoration: none; }"
                + "</style>"
                + "</head>"
                + "<body>"
                + "<div class=\"container\">"
                + "<div class=\"header\"><h1>Password Reset</h1></div>"
                + "<div class=\"content\">"
                + "<p>Hello,</p>"
                + "<p>You have requested to send email.</p>"
                + "<p><a href=\"" + Link + "\">Change Password</a></p>"
                + "</div>"
                + "</div>"
                + "</body>"
                + "</html>";
    }
}
