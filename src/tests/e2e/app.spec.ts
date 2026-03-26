import { test, expect } from '@playwright/test';

test.describe('Vacationes App', () => {
  test('should load the calendar page', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    await expect(page).toHaveTitle(/Vacationes/);
  });

  test('should load the settings page directly', async ({ page }) => {
    await page.goto('/settings');
    await page.waitForLoadState('networkidle');
    await expect(page.locator('body')).toBeVisible();
  });

  test('should load the sync page directly', async ({ page }) => {
    await page.goto('/sync');
    await page.waitForLoadState('networkidle');
    await expect(page.locator('body')).toBeVisible();
  });

  test('should load the plan page directly', async ({ page }) => {
    await page.goto('/plan');
    await page.waitForLoadState('networkidle');
    await expect(page.locator('body')).toBeVisible();
  });

  test('should add a single vacation day and show it on the calendar', async ({ page }) => {
    await page.goto('/plan');

    // Wait for the form to hydrate
    await expect(page.getByRole('button', { name: /save|guardar/i })).toBeVisible({ timeout: 15000 });

    // Set start and end date to a fixed future date (avoid weekends/holidays for clarity)
    const testDate = '2026-06-15'; // Monday
    await page.locator('input[type="date"]').first().fill(testDate);
    await page.locator('input[type="date"]').last().fill(testDate);

    // Add a label so we can identify the entry on the calendar
    await page.locator('input[placeholder*="Beach vacation"], input[placeholder*="Praia"]').fill('Test Vacation Day');

    // Submit the form
    await page.getByRole('button', { name: /save|guardar/i }).click();

    // After save the form should reset (label field should be empty again)
    await expect(
      page.locator('input[placeholder*="Beach vacation"], input[placeholder*="Praia"]')
    ).toHaveValue('', { timeout: 5000 });

    // Navigate to the calendar
    await page.goto('/');

    // Navigate to June 2026
    // Current month is March 2026, need to go forward 3 months
    const nextBtn = page.getByRole('button', { name: '→' });
    await expect(nextBtn).toBeVisible({ timeout: 10000 });
    await nextBtn.click();
    await nextBtn.click();
    await nextBtn.click();

    // Verify the entry label appears on the calendar
    await expect(page.getByText('Test Vacation Day')).toBeVisible({ timeout: 5000 });
  });
});
