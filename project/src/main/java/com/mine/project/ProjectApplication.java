package com.mine.project;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;
import java.util.UUID;

@SpringBootApplication
public class ProjectApplication {

	public static void main(String[] args) {
		System.out.println(new BCryptPasswordEncoder().encode("minhasenha"));
		SpringApplication.run(ProjectApplication.class, args);
	}



}

