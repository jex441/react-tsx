import Alert from "./components/Alert";
import Button from "./components/Button";
import { useState, useEffect } from "react";
import ListGroup from "./ListGroup/ListGroup";
import toDoService from "./services/apiClient";
import ToDo from "./interfaces/ToDo";
function App() {
	const service = toDoService();
	const [toDos, setToDos] = useState<ToDo[]>([]);

	const onClick = (id: number) => {
		let data = toDos.map((todo) => {
			if (todo.id === id) {
				todo.completed = !todo.completed;
			}
			return todo;
		});
		setToDos(data);
	};

	const getToDosHandler = async () => {
		const data = await service.getToDos();
		setToDos(data);
	};

	useEffect(() => {
		getToDosHandler();
	}, []);

	return (
		<>
			<ListGroup heading="To Dos:" items={toDos} onSelectItem={onClick} />
		</>
	);
}

export default App;
