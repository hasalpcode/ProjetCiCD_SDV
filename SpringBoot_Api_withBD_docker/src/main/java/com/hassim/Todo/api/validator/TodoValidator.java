package com.hassim.Todo.api.validator;

import java.util.Objects;

import org.springframework.stereotype.Service;

import com.hassim.Todo.api.exception.TodoBadRequestException;
import com.hassim.Todo.api.models.Todo;
import com.hassim.Todo.api.utils.StringUtils;

@Service
public class TodoValidator implements ITodoValidator {

	@Override
	public void validate(Todo todo) {
//		if(todo.getTitle() == null || todo.getTitle().isBlank()) {
		if(StringUtils.isBlank(todo.getTitle())) {
			throw new TodoBadRequestException("the title is mandatory");
		}
		
		if(StringUtils.isBlank(todo.getDescription())) {
			throw new TodoBadRequestException("the description is mandatory");
		}
		
		if(Objects.isNull(todo.getCompleted())) {
			throw new TodoBadRequestException("completed is mandatory");
		}
	}
}
