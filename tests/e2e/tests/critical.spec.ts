import { test, expect, BrowserContext } from '@playwright/test';

require('dotenv').config();

function env(): string {
  // Get test environment from environment variables
  // (Default to dev environment if none specified at runtime)
  if (process.env.TEST_ENV) {
    return process.env.TEST_ENV;
  } else {
    return "local";
  }
}

function bingo_url(): string {
  if (env() == "production") {
    console.log("Using production url https://bingo.incocollective.com/");
    return 'https://bingo.incocollective.com/';
  } else {
    console.log("Using local url http://localhost:8080");
    return 'http://localhost:8080';
  }
}

function home_url(): string {
  if (env() == "production") {
    console.log("Using production url https://incocollective.com/");
    return 'https://incocollective.com/';
  } else {
    console.log("Using local url http://localhost:5173/");
    return 'http://localhost:5173/';
  }
}

test('InCo Home & About pages load', async ({ page }) => {

  await page.goto(home_url());
  await expect(page).toHaveTitle(/Interconnected Collective/);

  await page.getByRole('link', { name: 'ABOUT US' }).nth(1).click();
  expect(page.getByText("Contributors")).toBeVisible({ timeout: 30000 })

});

test('Bingo home page & login modal load', async ({ page }) => {

  await page.goto(bingo_url());
  await expect(page).toHaveTitle(/Bingo!/);

  const signInButton = page.getByText("Sign in to track your scores!");
  await signInButton.click();

  
  const gmailLoginButton = page.getByText("Gmail Login");
  const popupPromise = page.waitForEvent('popup');
  await gmailLoginButton.click();
  const popup = await popupPromise;
  await expect(popup.getByRole("textbox", { name: "email" })).toBeVisible({ timeout: 30000 });
  console.log("Popup title: " + await popup.title());
  popup.close();
  
  page.on("dialog", async (dialog) => {
    expect(dialog.message()).toContain("Whoops, something went wrong, please try logging in again!");
  });

  // 
  // await gmailLoginButton.scrollIntoViewIfNeeded();
  // await gmailLoginButton.click();

});