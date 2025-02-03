package com.mine.project.exception;

public class AlreadyExistsException extends RuntimeException{

    public AlreadyExistsException(String msg){
        super(msg);
    }
}
