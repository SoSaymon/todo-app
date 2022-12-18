import React from "react";
import {Task} from "./Task";

interface TaskListProps {
	  todos: { text: string; completed: boolean }[];
	  handleRemove: (index: number) => void;
	  handleToggle: (index: number) => void;
}

export const TaskList = ({todos, handleRemove, handleToggle}: TaskListProps) => {
	return (
		<div className={`${todos.length ? 'border border-japaneseIndygo' : ''} rounded-lg bg-white w-full`}>
			{/*TODO: Fix scroll bar issue*/}
			{todos.map((todo, index) => (
				<Task key={index} todo={todo} index={index} handleRemove={handleRemove} handleToggle={handleToggle}/>
			))}
		</div>
	)
}