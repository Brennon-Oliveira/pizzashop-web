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
import { getProfileMock } from "./get-profile-mock.ts";
import { getManagedRestaurantMock } from "./get-managed-restaurant-mock.ts";
import { updateProfileMock } from "./update-profile-mock.ts";
import { getOrdersMock } from "./get-orders-mock.ts";
import { getOrderDetailsMock } from "./get-order-details-mock.ts";
import { approveOrderMock } from "./approve-order-mock.ts";
import { cancelOrderMock } from "./cancel-order-mock.ts";
import { deliverOrderMock } from "./deliver-order-mock.ts";
import { dispatchOrderMock } from "./dispatch-order-mock.ts";

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
	getProfileMock,
	getManagedRestaurantMock,
	updateProfileMock,
	getOrdersMock,
	getOrderDetailsMock,
	approveOrderMock,
	cancelOrderMock,
	deliverOrderMock,
	dispatchOrderMock,
);

export async function enableMSW() {
	if (env.MODE !== "test") {
		return;
	}
	await worker.start();
}
