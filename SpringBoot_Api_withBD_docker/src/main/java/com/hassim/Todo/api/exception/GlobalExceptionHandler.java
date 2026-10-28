package com.hassim.Todo.api.exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import com.hassim.Todo.api.models.ApiError;

@ControllerAdvice
public class GlobalExceptionHandler {

	@ExceptionHandler(value= Exception.class)
	public ResponseEntity<ApiError> handleException(Exception exception){
		return new ResponseEntity<>(new 				ApiError(exception.getMessage(),HttpStatus.INTERNAL_SERVER_ERROR.value()),HttpStatus.INTERNAL_SERVER_ERROR);
	}
	
	@ExceptionHandler(value= TodoBadRequestException.class)
	public ResponseEntity<ApiError> handleException(TodoBadRequestException exception){
		return new ResponseEntity<>(new ApiError(exception.getMessage(),HttpStatus.BAD_REQUEST.value()),HttpStatus.BAD_REQUEST);
	}
	
	@ExceptionHandler(value= TodoNotFoundException.class)
	public ResponseEntity<ApiError> handleException(TodoNotFoundException exception){
		return new ResponseEntity<>(new ApiError(exception.getMessage(),HttpStatus.NOT_FOUND.value()),HttpStatus.NOT_FOUND);
	}
}
