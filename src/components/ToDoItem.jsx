import { useState } from "react";

export const ToDoItem = ({ todo, setter }) => {
	const [done, setDone] = useState(todo.done);

	const changeDone = () => {
		todo.done = !todo.done;
		setDone(todo.done);
	};

	const deleteToDo = () => {
		setter(prev => prev.filter(item => item.task != todo.task));
	};

	return (
		<section
			onClick={changeDone}
			className={`flex justify-center items-center w-4/12 min-h-2/12 bg-purple-400 text-white font-mono ${
				done ? "line-through" : ""
			}`}
		>
			<p>{todo.task}</p>
			<button onClick={deleteToDo} className='bg-white text-black'>
				X
			</button>
		</section>
	);
};
