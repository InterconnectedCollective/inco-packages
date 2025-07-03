# InCo UI Tests

## Description

This is a small suite of critical UI tests for the Interconnected Collective website (https://incocollective.com/).

## Tests included

- Critical: Loads the home page, navigates to the About Us page, looks for Contributors list. Fails if it's unable to complete any of these steps.
- Axe: Loads the home page, scans for any programmatically detectable accessibility failures. Fails if it's unable to complete any of these steps, or if any WCAG failures are detected (A-level and AA-level failures only).

## Why?

tl;dr - trying not to break the website when making changes.
These tests can be run, either locally or in CI, to check for regressions before deploying changes to the website.

## How to Install and Configure the Project

### First-time setup

- Clone this repository to your desired workspace.
- Install dependencies: `npm install`
- Install Playwright browsers: `npx playwright install`
- To confirm successful setup, run the sample tests: `npx playwright test`
- After tests finish, the console output will summarize the results.
- The `playwright-report` and `test-results` folders contain HTML and JSON reports of test results. These results are overwritten with each test run, so make sure to back up any results you wish to keep for reference.
