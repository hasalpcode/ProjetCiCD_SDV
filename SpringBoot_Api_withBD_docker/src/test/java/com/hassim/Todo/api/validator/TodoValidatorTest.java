package com.hassim.Todo.api.validator;

import static org.assertj.core.api.Assertions.assertThatCode;
import static org.assertj.core.api.Assertions.assertThatThrownBy;

import org.junit.jupiter.api.Test;

import com.hassim.Todo.api.exception.TodoBadRequestException;
import com.hassim.Todo.api.models.Todo;

class TodoValidatorTest {

	private final TodoValidator validator = new TodoValidator();

	@Test
	void validate_throwsWhenTitleIsBlank() {
		Todo todo = new Todo();
		todo.setTitle("   ");
		todo.setDescription("some description");
		todo.setDone(false);

		assertThatThrownBy(() -> validator.validate(todo))
			.isInstanceOf(TodoBadRequestException.class)
			.hasMessage("the title is mandatory");
	}

	@Test
	void validate_passesWhenAllFieldsAreValid() {
		Todo todo = new Todo();
		todo.setTitle("Buy milk");
		todo.setDescription("2 liters, semi-skimmed");
		todo.setDone(false);

		assertThatCode(() -> validator.validate(todo)).doesNotThrowAnyException();
	}
}
