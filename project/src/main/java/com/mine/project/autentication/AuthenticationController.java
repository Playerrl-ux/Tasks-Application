package com.mine.project.autentication;

import com.mine.project.dto.LoginDTO;
import com.mine.project.model.User;
import com.mine.project.repository.UserRepository;
import com.mine.project.security.TokenService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/auth")
public class AuthenticationController {

    PasswordEncoder passwordEncoder;
    TokenService tokenService;
    UserRepository userRepository;

    @Autowired
    public AuthenticationController(PasswordEncoder passwordEncoder, TokenService tokenService, UserRepository userRepository) {
        this.passwordEncoder = passwordEncoder;
        this.tokenService = tokenService;
        this.userRepository = userRepository;
    }

    @PostMapping("/login")
    public ResponseEntity<Map<String, String>> login(@RequestBody LoginDTO loginDTO){

        User user = userRepository.findByUsername(loginDTO.username()).orElseThrow();
        if(passwordEncoder.matches(loginDTO.password(), user.getPassword())){
            String token = tokenService.generateToken(user);
            return ResponseEntity.ok().body(Map.of("token", token));
        }else{
            return ResponseEntity.badRequest().build();
        }

    }

    @PostMapping("/register")
    public ResponseEntity<String> register(){return null;}
}
