import { test, expect, type Page } from '@playwright/test';

test('has title', async ({ page }: { page: Page }) => {
  await page.goto('/');

  // Expect h1 to contain a substring.
  expect(await page.locator('h1').innerText()).toContain('Hello');
});
