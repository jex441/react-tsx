import Alert from "./components/Alert";
import Button from "./components/Button";
import { useState, useEffect } from "react";
import ListGroup from "./ListGroup/ListGroup";
import toDoService from "./services/apiClient";
import ToDo from "./interfaces/ToDo";
function App() {
	const service = toDoService();
	const [color, setColor] = useState("primary");
	const [toDos, setToDos] = useState<ToDo[]>([]);

	const onClick = () => {
		setColor("danger");
	};

	const getToDosHandler = async () => {
		const data = await service.getToDos();
		setToDos(data);
	};

	useEffect(() => {
		getToDosHandler();
	}, []);

	console.log(toDos);

	return (
		<>
			<ListGroup heading="To Dos:" items={toDos} onSelectItem={onClick} />
		</>
	);
}

export default App;
