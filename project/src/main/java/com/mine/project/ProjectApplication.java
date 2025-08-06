package com.mine.project;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

@SpringBootApplication
public class ProjectApplication {

	public static void main(String[] args) {
		System.out.println(new BCryptPasswordEncoder().encode("minhasenha"));
		SpringApplication.run(ProjectApplication.class, args);
	}



}

