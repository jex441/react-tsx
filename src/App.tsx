import { useState, useEffect } from "react";
import toDoService from "./services/apiClient";
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
		<div className="flex justify-center flex-row items-center h-full w-full p-5">
			<div className="w-1/2 flex justify-end">
				<img
					className="h-[400px] m-4"
					onClick={() => onClickLeft(artworks.left.id)}
					id="left"
					src={artworks.left.url}
				/>
			</div>
			<div className="w-1/2 flex justify-start">
				<img
					className="h-[400px] m-4"
					onClick={() => onClickRight(artworks.right.id)}
					id="right"
					src={artworks.right.url}
				/>
			</div>
		</div>
	);
}

export default App;
