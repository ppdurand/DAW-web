package edu.ThunderSound.api.controller;

import edu.ThunderSound.application.dto.AuthDTO.*;
import edu.ThunderSound.domain.user.User;
import edu.ThunderSound.infra.repository.UserRepository;
import edu.ThunderSound.infra.security.TokenService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Optional;

@RestController
@RequestMapping("/auth")
@RequiredArgsConstructor
public class AuthController {
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final TokenService tokenService;

    @PostMapping("/login")
    public ResponseEntity login(@RequestBody LoginRequest request){
        User user = this.userRepository.findByEmail(request.email()).orElseThrow(()->new RuntimeException("Email not found"));

        if (passwordEncoder.matches(request.password(), user.getPassword())) {
            String token  = this.tokenService.generateToken(user);

            return ResponseEntity.ok(token);
        }
        return ResponseEntity.badRequest().build();
    }

    @PostMapping("/signUp")
    public ResponseEntity signUp(@RequestBody SignUpRequest request){
        Optional<User> userConsult = this.userRepository.findByEmail(request.email());
        if(userConsult.isPresent()) return ResponseEntity.badRequest().build();

        User user = new User();

        user.setPassword(passwordEncoder.encode(request.password()));
        user.setEmail(request.email());
        user.setUsername(request.username());

        this.userRepository.save(user);

        String token  = this.tokenService.generateToken(user);
        return ResponseEntity.ok(new LoginResponse(user.getUsername(), token));
    }

}
