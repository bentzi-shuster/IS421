const { test, expect } = require('@playwright/test');

test('Button Functionality Test', async ({ page }) => {

    // await page.goto('http://localhost:3000');
    // await page.screenshot({ path: 'page-screenshot.png' });

    // Step 1: Navigate to the page with the button
    await page.goto('https://thexplorer.vercel.app/');

    // Step 2: Locate the button
    // Replace 'button-selector' with the actual selector of the button
    const button = page.locator('text=Share Your Explorer');

    // Step 3: Click the button
    await button.click();

    // Step 4: Verify the expected outcome
    // This depends on what the button is supposed to do
    // Replace 'target-section-selector' with the selector of the section to scroll to
    await page.waitForTimeout(100);
    const targetSection = page.locator('#subscribe-form');

    // Wait for the target section to be visible in the viewport
    await expect(targetSection).toBeVisible();
});



