import Alert from "./components/Alert";
import Button from "./components/Button";
import { useState, useEffect } from "react";
import ListGroup from "./ListGroup/ListGroup";
import toDoService from "./services/apiClient";
import ToDo from "./interfaces/ToDo";
import ChoiceForm from "./interfaces/ChoiceForm";

function App() {
	const [artworks, setArtWorks] = useState<ChoiceForm>({
		left: {
			id: "",
			url: "",
		},
		right: {
			id: "",
			url: "",
		},
	});
	const service = toDoService();

	const onClickLeft = async (id: string) => {
		const right = await service.getImage(id);
		setArtWorks({ ...artworks, right: right.data });
	};

	const onClickRight = async (id: string) => {
		const left = await service.getImage(id);
		setArtWorks({ ...artworks, left: left.data });
	};

	const getToDosHandler = async () => {
		const left = await service.getImage("");
		const right = await service.getImage("");

		setArtWorks({ left: left.data, right: right.data });
	};

	useEffect(() => {
		getToDosHandler();
	}, []);

	return (
		<div className="flex">
			<img
				onClick={() => onClickLeft(artworks.left.id)}
				id="left"
				src={artworks.left.url}
			/>
			<img
				onClick={() => onClickRight(artworks.right.id)}
				id="right"
				src={artworks.right.url}
			/>
		</div>
	);
}

export default App;
