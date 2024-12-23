import { test, expect } from "@playwright/test";

test("Sign up successfully", async ({ page }) => {
	await page.goto("/auth/sign-up", {
		waitUntil: "networkidle",
	});

	await page.getByLabel("Nome do restaurante").fill("Pizza Shop");
	await page.getByLabel("Seu nome").fill("John Doe");
	await page.getByLabel("Seu e-mail").fill("johndoe@example.com");
	await page.getByLabel("Seu celular").fill("123123123123");
	await page.getByRole("button", { name: "Finalizar cadastro" }).click();

	const toast = page.getByText("Restaurante cadastrado com sucesso!");

	await page.getByRole("button", { name: "Login" }).click();

	const emailInput = page.getByLabel("Seu e-mail");

	await expect(toast).toBeVisible();
	expect(page.url()).toContain("/auth/sign-in");
	expect(page.url()).toContain("johndoe@example.com");
	await expect(emailInput.inputValue()).resolves.toEqual("johndoe@example.com");
});

test("Sign in with error", async ({ page }) => {
	await page.goto("/auth/sign-up", {
		waitUntil: "networkidle",
	});

	await page.getByLabel("Nome do restaurante").fill("Invalid Name");
	await page.getByLabel("Seu nome").fill("John Doe");
	await page.getByLabel("Seu e-mail").fill("johndoe@example.com");
	await page.getByLabel("Seu celular").fill("123123123123");
	await page.getByRole("button", { name: "Finalizar cadastro" }).click();

	const toast = page.getByText("Erro ao cadastrar restaurante.");

	await expect(toast).toBeVisible();
});

test("Navigate to login page", async ({ page }) => {
	await page.goto("/auth/sign-up", {
		waitUntil: "networkidle",
	});

	await page.getByRole("link", { name: "Fazer login" }).click();

	expect(page.url()).toContain("/auth/sign-in");
});
