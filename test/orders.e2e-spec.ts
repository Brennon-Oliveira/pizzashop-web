import { test, expect } from "@playwright/test";
import { a } from "vitest/dist/chunks/suite.B2jumIFP.js";

test("list orders", async ({ page }) => {
	await page.goto("/orders", {
		waitUntil: "networkidle",
	});

	const first = page.getByRole("cell", { name: "Customer 1", exact: true });

	await first.waitFor({ timeout: 1000 });

	expect(first).toBeVisible();
	expect(page.getByRole("cell", { name: "Customer 10" })).toBeVisible();
});

test("paginate orders", async ({ page }) => {
	await page.goto("/orders", {
		waitUntil: "networkidle",
	});

	await page.getByRole("button", { name: "Próxima página" }).click();

	const first1 = page.getByRole("cell", { name: "Customer 11", exact: true });

	await first1.waitFor({ timeout: 1000 });

	expect(first1).toBeVisible();
	expect(page.getByRole("cell", { name: "Customer 20" })).toBeVisible();

	await page.getByRole("button", { name: "Última página" }).click();

	const first2 = page.getByRole("cell", { name: "Customer 51", exact: true });

	await first2.waitFor({ timeout: 1000 });

	expect(first2).toBeVisible();
	expect(page.getByRole("cell", { name: "Customer 60" })).toBeVisible();

	await page.getByRole("button", { name: "Página anterior" }).click();

	const first3 = page.getByRole("cell", { name: "Customer 41", exact: true });

	await first3.waitFor({ timeout: 1000 });

	expect(first3).toBeVisible();
	expect(page.getByRole("cell", { name: "Customer 50" })).toBeVisible();

	await page.getByRole("button", { name: "Primeira página" }).click();

	const first4 = page.getByRole("cell", { name: "Customer 1", exact: true });

	await first4.waitFor({ timeout: 1000 });

	expect(first4).toBeVisible();
	expect(page.getByRole("cell", { name: "Customer 10" })).toBeVisible();
});

test("filter by order id", async ({ page }) => {
	await page.goto("/orders", {
		waitUntil: "networkidle",
	});

	await page.getByPlaceholder("Id do pedido").fill("order-11");
	await page.getByRole("button", { name: "Filtrar resultados" }).click();

	const item = await page.getByRole("cell", {
		name: "Customer 11",
		exact: true,
	});

	await item.waitFor({ timeout: 1000 });

	expect(item).toBeVisible();
	expect(page.getByRole("table").getByText("Cancelado")).toBeVisible();
});

test("filter by customer name", async ({ page }) => {
	await page.goto("/orders", {
		waitUntil: "networkidle",
	});

	await page.getByPlaceholder("Nome do cliente").fill("Customer 11");
	await page.getByRole("button", { name: "Filtrar resultados" }).click();

	const item = await page.getByRole("cell", {
		name: "order-11",
		exact: true,
	});

	await item.waitFor({ timeout: 1000 });

	expect(item).toBeVisible();
	expect(page.getByRole("table").getByText("Cancelado")).toBeVisible();
});

test("filter by status", async ({ page }) => {
	await page.goto("/orders", {
		waitUntil: "networkidle",
	});

	await page.getByRole("combobox").click();
	await page.getByLabel("Pendente").click();

	await page.getByRole("button", { name: "Filtrar resultados" }).click();

	const tableRows = page.getByRole("cell", { name: "Pendente" });

	await expect(tableRows).toHaveCount(10);
});
