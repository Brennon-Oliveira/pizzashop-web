import { test, expect } from "@playwright/test";

test("update profile successfully", async ({ page }) => {
	await page.goto("/", {
		waitUntil: "networkidle",
	});

	await page.getByRole("button", { name: "Pizza Shop" }).click();
	await page.getByRole("menuitem", { name: "Perfil da loja" }).click();

	await page.getByLabel("Nome").fill("Rocket Pizza");
	await page.getByLabel("Descrição").fill("Another Description");

	await page.getByRole("button", { name: "Salvar" }).click();

	await page.waitForLoadState("networkidle");

	const toast = page.getByText("Perfil atualizado com sucesso!");

	await page.getByRole("button", { name: "Close", exact: true }).click();

	const updatedButton = await page.getByRole("button", {
		name: "Rocket Pizza",
	});

	await updatedButton.waitFor({ timeout: 1000 });

	await expect(toast).toBeVisible();
	await expect(updatedButton).toBeVisible();
});
