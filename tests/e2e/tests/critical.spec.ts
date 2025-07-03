import { test, expect } from '@playwright/test';

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

function home_url(): string {
  if (env() == "production") {
    console.log("Using production url https://incocollective.com/");
    return 'https://incocollective.com/';
  } else {
    console.log("Using local url http://localhost:3000/");
    return 'http://localhost:3000/';
  }
}

test('InCo home page loads', async ({ page }) => {

  await page.goto(home_url());

  await expect(page).toHaveTitle(/Interconnected Collective/);

  await page.getByRole('link', { name: 'ABOUT US' }).nth(1).click();

  await page.getByText("Contributors").isVisible()

});

