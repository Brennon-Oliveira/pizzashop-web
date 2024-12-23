import { http, HttpResponse } from "msw";
import type {
	GetOrderDetailsParams,
	GetOrderDetailsResponse,
} from "../get-order-details";

export const getOrderDetailsMock = http.get<
	GetOrderDetailsParams,
	never,
	GetOrderDetailsResponse
>("/orders/:orderId", ({ params }) => {
	return HttpResponse.json({
		id: params.orderId,
		customer: {
			name: "John Doe",
			email: "johndoe@example.com",
			phone: "+55 (99) 99999-9999",
		},
		createdAt: new Date().toISOString(),
		status: "pending",
		totalInCents: 35000,
		orderItems: [
			{
				id: "order-item-1",
				priceInCents: 10000,
				product: {
					name: "Pizza Pepperoni",
				},
				quantity: 2,
			},
			{
				id: "order-item-1",
				priceInCents: 15000,
				product: {
					name: "Pizza Margerita",
				},
				quantity: 1,
			},
		],
	});
});
