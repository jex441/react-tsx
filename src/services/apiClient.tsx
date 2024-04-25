import axios from "axios";
import ToDo from "../interfaces/ToDo";

class ToDoService {
	http = axios.create({
		baseURL: "https://jsonplaceholder.typicode.com",
	});

	async getToDos() {
		const res = await this.http.get<ToDo[]>("/todos");
		return res.data;
	}
	postToDo() {
		this.http.post<ToDo>("/todos");
	}
}

export default function toDoService() {
	return new ToDoService();
}
