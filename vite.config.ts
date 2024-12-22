import { defineConfig, mergeConfig } from "vite";
import { defineConfig as defineTestConfigs } from "vitest/config";
import react from "@vitejs/plugin-react";
import tsconfigPath from "vite-tsconfig-paths";

export default mergeConfig(
	defineConfig({
		plugins: [react(), tsconfigPath()],
	}),
	defineTestConfigs({
		test: {
			setupFiles: ["./test/setup.ts"],
			environment: "happy-dom",
		},
	}),
);
