package com.mine.project.autentication;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;

import java.util.Arrays;

//@Configuration
//public class CorsConfig {
//
//    @Bean
//    public CorsFilter corsFilter() {
//        CorsConfiguration config = new CorsConfiguration();
//
//        // Defina a origem permitida (substitua pelo domínio correto, como http://localhost:4200)
//        config.setAllowedOrigins(Arrays.asList("http://localhost:4200"));
//
//        // Permitir credenciais
//        config.setAllowCredentials(true);
//
//        // Permitir métodos HTTP que serão utilizados (GET, POST, etc.)
//        config.setAllowedMethods(Arrays.asList("GET", "POST", "PUT", "DELETE", "OPTIONS"));
//
//        // Definir cabeçalhos permitidos
//        config.setAllowedHeaders(Arrays.asList("Authorization", "Content-Type", "Accept"));
//
//        // Expor cabeçalhos como 'Authorization' para o frontend
//        config.setExposedHeaders(Arrays.asList("Authorization"));
//
//        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
//        source.registerCorsConfiguration("/**", config);
//
//        return new CorsFilter(source);
//    }
//}