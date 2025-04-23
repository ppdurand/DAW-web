package edu.ThunderSound.application.dto;

public class AuthDTO {
    public record LoginRequest(String email, String password) {}
    public record LoginResponse(String name, String token) {}

    public record SignUpRequest(String username, String email, String password) {}
}
