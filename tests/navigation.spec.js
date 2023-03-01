// @ts-check
const { test, expect } = require('@playwright/test')
const { GLOBAL_CONSTANT, TEXT_VALUES } = require('./constant')

test.describe.configure({ mode: 'serial' })

/** @type {import('@playwright/test').Page} */
let page

test.beforeAll(async ({ browser }) => {
  page = await browser.newPage()
  await page.goto(GLOBAL_CONSTANT.target_url)
})

test('View Navigation', async ({ browser }) => {
  await page.getByText(TEXT_VALUES.plant).click()
  await expect(page).toHaveURL(/.*mes-plantes/)
  await page.getByText(TEXT_VALUES.keepPlant).click()
  await expect(page).toHaveURL(/.*plantes-gardees/)
  await page.getByText(TEXT_VALUES.home).click()
  await expect(page).toHaveURL(/.*/)
})
