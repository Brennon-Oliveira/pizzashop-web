import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { NavLink } from "./NavLink";
import { MemoryRouter } from "react-router-dom";

describe("Nav Link", () => {
	it("should highlinght the nav link when is the current page link", () => {
		const wrapper = render(
			<>
				<NavLink to="/home">Home</NavLink>
				<NavLink to="/about">About</NavLink>
			</>,
			{
				wrapper: ({ children }) => {
					return (
						<MemoryRouter initialEntries={["/about"]}>{children}</MemoryRouter>
					);
				},
			},
		);

		expect(wrapper.getByText("Home").dataset.current).toEqual("false");
		expect(wrapper.getByText("About").dataset.current).toEqual("true");
	});
});
