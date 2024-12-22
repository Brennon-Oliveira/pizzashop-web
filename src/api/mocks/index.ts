import { env } from "@/env";
import { setupWorker } from "msw/browser";
import { signInMock } from "./sign-in-mock";
import { registerRestaurantMock } from "./register-restaurant-mock";
import { getDayOrdersAmountMock } from "./get-day-orders-amount-mock";
import { getMonthCanceledOrdersAmountMock } from "./get-month-canceled-orders-amount-mock.ts";
import { getMonthRevenueMock } from "./get-month-revenue-mock.ts";
import { getDailyRevenueInPeriodMock } from "./get-daily-revenue-in-period-mock.ts";
import { getPopularProductsMock } from "./get-popular-products-mock.ts";
import { getMonthOrdersAmountMock } from "./get-months-orders-amount-mock.ts.ts";

export const worker = setupWorker(
	signInMock,
	registerRestaurantMock,
	getDayOrdersAmountMock,
	getMonthCanceledOrdersAmountMock,
	getMonthCanceledOrdersAmountMock,
	getMonthRevenueMock,
	getMonthOrdersAmountMock,
	getDailyRevenueInPeriodMock,
	getPopularProductsMock,
);

export async function enableMSW() {
	if (env.MODE !== "test") {
		return;
	}
	await worker.start();
}
