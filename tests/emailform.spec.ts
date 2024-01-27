const { test, expect } = require('@playwright/test');

function generateRandomEmail(domain = 'gmail.com') {
    const randomString = Math.random().toString(36).substring(2, 15);
    return `test_${randomString}@${domain}`;
}

test('Email Submit Form Test', async ({ page }) => {

    const emailToTest = generateRandomEmail();

    // Step 1: Navigate to the page with the email form
    await page.goto('https://thexplorer.vercel.app/');

    // Step 2: Fill in the email address
    await page.fill('input[type="email"]', emailToTest); // Replace with your email input selector

    // Step 3: Submit the form
    await page.click('button[type="submit"]'); // Replace with your submit button selector

    // Step 4: Verify the form submission (e.g., check for a success message)
    // This step depends on how your application confirms the submission
    await expect(page.locator('data-testid=notification-success')).toHaveText('Subscribed successfully!', { timeout: 10000 }); // Replace with your success message selector and text

    // Optional: Verify that no error messages are displayed
    // await expect(page.locator('error-message-selector')).toBeHidden();
});