import fs from 'fs'
import path from 'path'
import { test, expect } from '@playwright/test'
import AxeBuilder from '@axe-core/playwright'
import { createHtmlReport } from 'axe-html-reporter'
import { parse } from 'csv-parse/sync'

test.describe('Test pages with axe', () => {

  const scanPages = parse(fs.readFileSync(path.join(__dirname, '..', 'test-data', 'scanpages.csv')), {
    columns: true,
    skip_empty_lines: true
  })

  for (const scanPage of scanPages) {
    test(`Scan page: ${scanPage.url}`, async ({ page }) => {
      await page.goto(scanPage.url, { waitUntil: "networkidle" })
      
      const pageTitle = (await page.title()).replace(/\W/g, '')

      const accessibilityScanResults = await new AxeBuilder({ page })
        .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
        .analyze()

      createHtmlReport({
        results: accessibilityScanResults,
        options: {
          outputDir: 'test-results',
          reportFileName: pageTitle + ' - axe report.html'
        }
      })
      
      expect(accessibilityScanResults.violations.length).toEqual(0)
   }) 
  }
})