package com.hassim.Todo.api.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.hassim.Todo.api.models.Todo;

@Repository
public interface ITodoRepository extends JpaRepository<Todo, Long> {

}
