import { http, HttpResponse } from "msw";
import type { SingInBody } from "../sign-in";

export const signInMock = http.post<never, SingInBody>(
	"/authenticate",
	async ({ request }) => {
		const { email } = await request.json();

		if (email === "johndoe@example.com") {
			return new HttpResponse(null, {
				status: 200,
				headers: {
					"Set-Cookie": "auth=sample-jwt",
				},
			});
		}
		return new HttpResponse(null, { status: 401 });
	},
);
