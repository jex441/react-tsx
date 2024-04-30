import axios from "axios";
import ToDo from "../interfaces/ToDo";

class ToDoService {
	api = axios.create({
		baseURL: "http://localhost:3000/api",
	});

	async getImage(id: string) {
		const res = await this.api.post("/image", { id: id });
		console.log("=>", res);
		return res;
	}
}

export default function toDoService() {
	return new ToDoService();
}
