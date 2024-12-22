import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { SignIn } from "./SignIn";
import { MemoryRouter } from "react-router-dom";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/lib/react-query";
import { HelmetProvider } from "react-helmet-async";

describe("Sign-In", () => {
	it("should set default email input value if email is present on search params", () => {
		const wrapper = render(<SignIn />, {
			wrapper: ({ children }) => {
				return (
					<HelmetProvider>
						<MemoryRouter
							initialEntries={["/auth/sign-in?email=johndoe@example.com"]}
						>
							<QueryClientProvider client={queryClient}>
								{children}
							</QueryClientProvider>
						</MemoryRouter>
					</HelmetProvider>
				);
			},
		});

		const emailInput = wrapper.getByLabelText("Seu e-mail") as HTMLInputElement;

		expect(emailInput.value).toEqual("johndoe@example.com");
	});
});