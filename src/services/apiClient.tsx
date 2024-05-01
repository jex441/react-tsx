import axios from "axios";

class ImageService {
	api = axios.create({
		baseURL: "http://localhost:3000/api",
	});

	async getImage() {
		const res = await this.api.get("/image");
		console.log("=>", res);
		return res;
	}
}

export default function imageService() {
	return new ImageService();
}
