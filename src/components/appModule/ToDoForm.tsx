import React from "react";

interface ToDoFormProps {
	onSubmit: (event: React.FormEvent) => void;
	onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
	handleRemoveAll: (event: React.FormEvent) => void;
	input: string;
}

export const ToDoForm = ({onChange, onSubmit, handleRemoveAll,input}: ToDoFormProps) => {
	return (
		<form onSubmit={onSubmit} className="flex w-full max-h-1/3 w-1/2 justify-between mb-12">
			<input
				className="border border-japaneseIndygo rounded-lg p-2 w-80 todo__input"
				value={input}
				placeholder={"Add a new task"}
				onChange={onChange}
			/>
			<button className="bg-japaneseIndygo hover:bg-japaneseIndygoDark text-white font-bold py-2 px-4 rounded-full">Add task</button>
			<button onClick={handleRemoveAll} className="bg-japaneseIndygo hover:bg-japaneseIndygoDark text-white font-bold py-2 px-4 rounded-full">Clear tasks</button>
		</form>
	)
}