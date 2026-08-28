# InCo UI Tests

## Description

This is a small suite of critical UI tests for the Interconnected Collective website (https://incocollective.com/).

## Tests included

- critical: Loads the home page, navigates to the About Us page, looks for Contributors list. Fails if it's unable to complete any of these steps.
- axe: Loads all pages listed in axe-test-data/scanpages.csv, and scans for any programmatically detectable accessibility failures. Fails if it's unable to complete any of these steps, or if any WCAG failures are detected (A-level and AA-level failures only).

## Why?

tl;dr - trying not to break the website when making changes.
These tests can be run, either locally or in CI, to check for regressions before deploying changes to the website.

## How to Install and Configure the Project

### First-time setup

- Clone this repository to your desired workspace.
- Install dependencies: `npm install`
- Install Playwright browsers: `npx playwright install`
- To confirm successful setup, run critical.test.ts: `npx playwright test critical.spec.ts`
- After tests finish, the console output will summarize the results.
- The `playwright-report` and `test-results` folders contain HTML and JSON reports of test results. These results are overwritten with each test run, so make sure to back up any results you wish to keep for reference.

### Choosing your test environment

By default, these tests will run against your local environment, using these ports:
- InCo website at http://localhost:5173/
- Bingo website at http://localhost:8080

If you're using different ports than this, you'll need to change the ports listed in the following files:
- For `critical.spec.ts`, update the ports in the `bingo_url()` and `home_url()` functions in that file.
- For `axe.spec.ts`, update the ports in `axe-test-data/scanpages.csv`.

If you'd like to test against production instead of local, set your TEST_ENV environment variable. In your terminal, run the following:
`set TEST_ENV=production`

Note that this environment variable is only for this terminal window - i.e., if you close this terminal window and come back, you'll need to re-set the TEST_ENV.
If you'd like to permanently set your TEST_ENV across all terminals, run the following, and close/re-open your terminal window afterwards in order to apply the changes:
`setx TEST_ENV production`

### Running tests

To run all tests:
`npx playwright test`

To run a single test:
`npx playwright test [test name].spec.ts`
e.g.,
`npx playwright test critical.spec.ts`