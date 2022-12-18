import React from "react";

interface TaskProps {
	index: number;
	todo: { text: string; completed: boolean };
	handleRemove: (index: number) => void;
	handleToggle: (index: number) => void;
}
export const Task = ({index, todo, handleRemove, handleToggle}: TaskProps) => {
	return (
		<div className="flex justify-between items-center w-full text-center">
            <span
				className={`${
					todo.completed
						? 'line-through'
						: ''
				} cursor-pointer w-3/4 p-2 text-md`}
				onClick={() => handleToggle(index)}
			>
              {todo.text}
            </span>
			<span className={"flex justify-between p-2 w-1/4"}>
				<button
					className="bg-japaneseIndygo hover:bg-japaneseIndygoDark text-white font-bold py-2 px-4 rounded-full"
					onClick={() => handleToggle(index)}
				>
				{todo.completed ? 'Incomplete' : 'Complete'}
			</button>
			<button
				className="bg-japaneseIndygo hover:bg-japaneseIndygoDark text-white font-bold py-2 px-4 rounded-full"
				onClick={() => handleRemove(index)}
			>
				Remove
			</button>
			</span>

		</div>
	)
}