package com.hassim.Todo.api.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hassim.Todo.api.repository.ITodoRepository;
import com.hassim.Todo.api.validator.ITodoValidator;

import io.swagger.v3.oas.annotations.Operation;

import com.hassim.Todo.api.exception.TodoNotFoundException;
import com.hassim.Todo.api.models.Todo;

@RestController
@RequestMapping("/api/todos")
public class TodoController {
	
	@Autowired
	private ITodoRepository todoRepository;
	
	@Autowired
	private ITodoValidator todoValidator;
	
	@Operation(summary="get all todos in the base")
	@GetMapping
	public ResponseEntity<List<Todo>> getAll(){
		List<Todo> alltodos =  todoRepository.findAll();
		return ResponseEntity.ok(alltodos);
	}
	
	@Operation(summary="get one todo in the base")
	@GetMapping("{id}")
	public Todo getOne(@PathVariable Long id){
		return todoRepository.findById(id).orElseThrow(()-> new TodoNotFoundException(id));
	
	}
	
	@Operation(summary="add a todo in the base")
	@PostMapping()
	public Todo saveTodo(@RequestBody Todo todo){
		todoValidator.validate(todo);
		return todoRepository.save(todo);
	
	}
	
	@Operation(summary="edit a todo in the base")
	@PutMapping("{id}")
	public Todo updateTodo(@PathVariable Long id,@RequestBody Todo todo){
		todoValidator.validate(todo);
		var entity = todoRepository.findById(id).orElseThrow(()-> new TodoNotFoundException(id));
		entity.setTitle(todo.getTitle());
		entity.setDescription(todo.getDescription());
		entity.setCompleted(todo.getCompleted());
		todoRepository.save(entity);
		return entity;
	
	}
	
	
	@Operation(summary="destroy a todo in the base")
	@DeleteMapping("{id}")
	public void deleteTodo(@PathVariable Long id){
		 todoRepository.deleteById(id);
	
	}
	
}
