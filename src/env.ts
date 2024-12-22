import { z } from "zod";

const envSchema = z.object({
	VITE_API_URL: z.string().refine((apiUrl) => {
		if (apiUrl === "/") {
			return true;
		}
		return z.string().url().parse(apiUrl);
	}),
	VITE_ENABLE_API_DELAY: z.string().transform((value) => value === "true"),
	MODE: z.enum(["production", "development", "test"]),
});

export const env = envSchema.parse(import.meta.env);
