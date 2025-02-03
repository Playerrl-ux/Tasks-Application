package com.mine.project.service;

import com.mine.project.model.User;
import com.mine.project.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserService {

    UserRepository userRepository;

    @Autowired
    public UserService(UserRepository userRepository){
        this.userRepository = userRepository;
    }


    public Optional<User> returnUserByName(String username){
        return this.userRepository.findByUsername(username);
    }
}
