import axios from "axios";

class ImageService {
	api = axios.create({
		baseURL: "http://localhost:3000/api",
	});

	async getImage(id: string) {
		const res = await this.api.post("/image", { id: id });
		return res;
	}
}

export default function imageService() {
	return new ImageService();
}
