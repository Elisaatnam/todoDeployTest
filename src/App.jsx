import { useState } from "react";
import { ToDoForm } from "./components/ToDoForm";
import { ToDoList } from "./components/ToDoList";

function App() {
	const [allToDos, setAllToDos] = useState([]);
	return (
		<>
			<h1>Elisa's ToDo's</h1>
			<ToDoForm setAllToDos={setAllToDos} />
			<ToDoList items={allToDos} setAllToDos={setAllToDos} />
		</>
	);
}

export default App;
