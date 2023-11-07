import { ToDoItem } from "./ToDoItem";

export const ToDoList = props => {
	return (
		<section className='flex flex-col items-center gap-2'>
			{props.items?.map((item, index) => (
				<ToDoItem key={index} todo={item} setter={props.setAllToDos} />
			))}
		</section>
	);
};
