import express from "express";
import path from "path";
import axios from "axios";
import bodyParser from "body-parser";

import * as dotenv from "dotenv";

// import db from "../db/index.ts";

// Constants
const port = 3000;
const __dirname = path.resolve();
dotenv.config({ path: __dirname+'/.env' });

const { CLIENT_SECRET, CLIENT_ID} = process.env;

const app = express();

// body parsing middleware
app.use(express.json());

app.use("/", express.static(__dirname + "/dist"));
app.use(bodyParser.json());

app.post("/api/image", async (req,res, next) => {
	const artworkID = req.body.id.length ? req.body.id : "515bb3cacd4b8ef7fd001c3e"

interface Body {
	token: string;
}
interface Href {
	href: string;
}
interface Image {
	image: Href;
}

interface Artwork {
	id: string;
	_links: Image;
}

interface Response {
	_embedded: {artworks: Artwork[]};
}
	const response = await axios
	.post<Body>("https://api.artsy.net/api/tokens/xapp_token", {
		client_id: CLIENT_ID,
		client_secret: CLIENT_SECRET,
	},
	)
	.then((res) => res);

	const getImages = async (token: string) => {
		const res = await axios.get<Response>(`https://api.artsy.net/api/artworks?similar_to_artwork_id=${artworkID}`, {
			headers: {
				'X-Xapp-Token': token,
				'Accept': 'application/vnd.artsy-v2+json'
			  }
		});
		return res.data._embedded;
	}

	const data = await getImages(response.data.token)
	const randomInt = Math.floor(Math.random() * 5)
	const rawUrl = data?.artworks && data?.artworks[randomInt]._links.image.href
	const url = rawUrl.split("{image_version}")[0] + "large.jpg"
	const id = data?.artworks[randomInt].id
return res.send(
	{url: url, id: id}
	)
});

app.use("*", (req, res) => {
	res.sendFile(path.join(__dirname, "/dist/index.html"));
});

// Connect to database
const syncDB = async () => {
	// await db.sync({force:true});
	console.log("All models were synchronized successfully.");
};

const authenticateDB = async () => {
	try {
		// await db.authenticate();
		console.log("Connection has been established successfully.");
	} catch (error) {
		console.error("Unable to connect to the database:", error);
	}
};

syncDB();
// authenticateDB();

// Start http server
app.listen(port, () => {
	console.log(`Server started at http://localhost:${port}`);
});
