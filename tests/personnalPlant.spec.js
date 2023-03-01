// @ts-check
const { test, expect } = require('@playwright/test')
const { GLOBAL_CONSTANT, BUTTON_NAME, CLASS_CSS, TEXT_VALUES } = require('./constant')

test.describe.configure({ mode: 'serial' })

/** @type {import('@playwright/test').Page} */
let page

test.beforeAll(async ({ browser }) => {
  page = await browser.newPage()
  await page.goto(GLOBAL_CONSTANT.target_url)
})

test('View Personal Plant', async ({ browser }) => {
  await page.getByText(TEXT_VALUES.plant).click()
  await expect(page).toHaveURL(/.*mes-plantes/)
})

test('Button Keep Plant', async ({ browser }) => {
  await expect(page.locator(BUTTON_NAME.keepButton)).toHaveClass(CLASS_CSS.btnActive)
  await expect(page.locator(BUTTON_NAME.keepButton)).not.toHaveClass(CLASS_CSS.btnActive)
  await page.locator(BUTTON_NAME.keepButton).click()

  await expect(page.locator(BUTTON_NAME.keepButton)).not.toHaveClass(CLASS_CSS.btnActive)
  await expect(page.locator(BUTTON_NAME.keepButton)).toHaveClass(CLASS_CSS.btnActive)
})
