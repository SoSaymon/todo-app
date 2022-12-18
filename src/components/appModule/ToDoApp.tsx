import React, { useState } from 'react';
import {ToDoForm} from "./ToDoForm";
import {TaskList} from "./TaskList";

interface Todo {
	text: string;
	completed: boolean;
}

export const TodoApp = () => {
	// TODO: Add additional info to the todo item
	const [todos, setTodos] = useState<Todo[]>([]);
	const [input, setInput] = useState('');

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setInput(event.target.value);
	};

	const handleSubmit = (event: React.FormEvent) => {
		const formInput = document.querySelector('.todo__input') as HTMLInputElement;

		event.preventDefault();
		if (input !== '') {
			setTodos([...todos, {text: input, completed: false}]);
			setInput('');
			if (formInput.style.borderColor === 'red') {
				formInput.style.borderColor = '#2A3855';
			}
		} else {
			formInput.style.borderColor = 'red';
			alert('Please enter a todo item');
		}

	};

	const handleRemoveAll = (event: React.FormEvent) => {
		const formInput = document.querySelector('.todo__input') as HTMLInputElement;

		event.preventDefault();

		formInput.style.borderColor = '#2A3855';
		setInput('');
		setTodos([]);
	};

	const handleRemove = (index: number) => {
		const newTodos = [...todos];
		newTodos.splice(index, 1);
		setTodos(newTodos);
	};

	const handleToggle = (index: number) => {
		const newTodos = [...todos];
		newTodos[index].completed = !newTodos[index].completed;
		setTodos(newTodos);
	};

	return (
		<div className="flex flex-wrap justify-center w-full">
			<h2 className={"w-full text-2xl font-bold text-center mb-12"}>ToDo App</h2>
			<ToDoForm onSubmit={handleSubmit} onChange={handleChange} handleRemoveAll={handleRemoveAll} input={input}/>
			<TaskList todos={todos} handleRemove={handleRemove} handleToggle={handleToggle}/>
		</div>
	);
};