export const ToDoForm = props => {
	const addToDo = e => {
		if (e.key === "Enter" && e.target.value.length > 0) {
			const task = taskBuilder(e.target.value);
			props.setAllToDos(prev => [...prev, task]);
			e.target.value = "";
		}
	};

	const taskBuilder = inputTask => {
		return {
			task: inputTask,
			done: false,
		};
	};

	return (
		<section className='flex justify-center items-center py-40'>
			<input
				onKeyDown={addToDo}
				className='border-b-2 outline-none px-5 py-4 text-3xl'
				type='text'
				name='task'
				id=''
			/>
		</section>
	);
};
