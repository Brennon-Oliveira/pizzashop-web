import { test, expect } from "@playwright/test";

test("display day orders amount metric", async ({ page }) => {
	await page.goto("/", {
		waitUntil: "networkidle",
	});

	expect(page.getByText("20", { exact: true })).toBeVisible();
	expect(page.getByText("-5% em relação a ontem")).toBeVisible();
});

test("display month orders amount metric", async ({ page }) => {
	await page.goto("/", {
		waitUntil: "networkidle",
	});

	expect(page.getByText("200", { exact: true })).toBeVisible();
	expect(page.getByText("7% relação ao mês passado")).toBeVisible();
});

test("display month canceled orders amount metric", async ({ page }) => {
	await page.goto("/", {
		waitUntil: "networkidle",
	});

	expect(page.getByText("5", { exact: true })).toBeVisible();
	expect(page.getByText("5% relação ao mês passado")).toBeVisible();

	await page.waitForTimeout(2000);
});

test("display month revenue metric", async ({ page }) => {
	await page.goto("/", {
		waitUntil: "networkidle",
	});

	expect(page.getByText("R$ 20.342,02")).toBeVisible();
	expect(page.getByText("10% relação ao mês passado")).toBeVisible();

	await page.waitForTimeout(2000);
});
