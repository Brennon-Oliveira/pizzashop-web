import { http, HttpResponse } from "msw";
import type { GetPopularProductsResponse } from "../get-popular-products";

export const getPopularProductsMock = http.get<
	never,
	never,
	GetPopularProductsResponse
>("/metrics/popular-products", async () => {
	return HttpResponse.json([
		{
			product: "Pizza 01",
			amount: 3,
		},
		{
			product: "Pizza 02",
			amount: 5,
		},
		{
			product: "Pizza 03",
			amount: 7,
		},
		{
			product: "Pizza 04",
			amount: 9,
		},
		{
			product: "Pizza 05",
			amount: 13,
		},
	]);
});
