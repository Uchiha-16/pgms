package com.postgresql.pgms.exception;

public class CustomErrorException extends RuntimeException{
    public CustomErrorException(String message) {//==============================================
        super(message);
    }

}
