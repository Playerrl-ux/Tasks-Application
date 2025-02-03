package com.mine.project.handler;

import com.mine.project.exception.AlreadyExistsException;
import com.mine.project.exception.NotFoundException;
import com.mine.project.exception.TitleConflictException;
import com.mine.project.exception.UnauthorizedException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.servlet.NoHandlerFoundException;

import java.util.Arrays;

@ControllerAdvice
public class ExceptionHandler {

    @org.springframework.web.bind.annotation.ExceptionHandler(NotFoundException.class)
    public ResponseEntity<String> NotFoundHandler(NotFoundException ex){
        String msg = ex.getMessage();
        return new ResponseEntity<>(msg, HttpStatus.NOT_FOUND);
    }

    @org.springframework.web.bind.annotation.ExceptionHandler(UnauthorizedException.class)
    public ResponseEntity<String> UnauthorizedHandler(UnauthorizedException ex){
        String msg = ex.getMessage();
        return new ResponseEntity<>(msg, HttpStatus.UNAUTHORIZED);
    }


    @org.springframework.web.bind.annotation.ExceptionHandler(AlreadyExistsException.class)
    public ResponseEntity<String> AlreadyExistsHandler(AlreadyExistsException ex) {
        // Lógica para tratar exceções globais
        return new ResponseEntity<String>(ex.getMessage(), HttpStatus.CONFLICT);
    }

    @org.springframework.web.bind.annotation.ExceptionHandler(TitleConflictException.class)
    public ResponseEntity<String> TitleConfictHandler(TitleConflictException ex) {
        // Lógica para tratar exceções globais
        return new ResponseEntity<String>(ex.getMessage(), HttpStatus.BAD_REQUEST);
    }


}
