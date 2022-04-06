import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgrPlugin from "vite-plugin-svgr";
import EnvironmentPlugin from "vite-plugin-environment";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		svgrPlugin({
			svgrOptions: {
				icon: true,
			},
		}),
		react(),
		EnvironmentPlugin(["UNSPLASH_API_KEY"]),
	],
});
