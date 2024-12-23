import { test, expect } from "@playwright/test";

test("Sign in successfully", async ({ page }) => {
	await page.goto("/auth/sign-in", {
		waitUntil: "networkidle",
	});

	await page.getByLabel("Seu e-mail").fill("johndoe@example.com");
	await page.getByRole("button", { name: "Acessar painel" }).click();

	const toast = page.getByText(
		"Enviamos um link de autenticação para seu e-mail.",
	);

	await expect(toast).toBeVisible();
});

test("Sign in with wrong credentials", async ({ page }) => {
	await page.goto("/auth/sign-in", {
		waitUntil: "networkidle",
	});

	await page.getByLabel("Seu e-mail").fill("wrong@example.com");
	await page.getByRole("button", { name: "Acessar painel" }).click();

	const toast = page.getByText("Credenciais inválidas.");

	await expect(toast).toBeVisible();
});

test("Navigate to new restaurant page", async ({ page }) => {
	await page.goto("/auth/sign-in", {
		waitUntil: "networkidle",
	});

	await page.getByRole("link", { name: "Novo estabelecimento" }).click();

	expect(page.url()).toContain("/auth/sign-up");
});
