import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
	base: "/",
	plugins: [react()],
	preview: {
		host: "0.0.0.0",
		port: 3000,
		strictPort: true,
	},
	server: {
		proxy: {
			"/api": {
				target:"http://localhost:3000",
				changeOrigin: true,
				secure: false,
				ws: true,
			},
		},
	},
});
