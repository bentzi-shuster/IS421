const { test, expect } = require('@playwright/test');

test('Component Links Test', async ({ page }) => {
    // Step 1: Navigate to the page where the component exists
    await page.goto('https://thexplorer.vercel.app/');

    // Step 2: Select the component that contains the links
    // Replace '.component-class' with the appropriate selector for your component
    const component = await page.locator('.nav');

    // Step 3: Find all links within the component
    // This assumes that links are 'a' tags; adjust if necessary
    const links = await component.locator('a');

    // Step 4: Iterate over each link and perform checks
    const count = await links.count();
    for (let i = 0; i < count; ++i) {
        const link = links.nth(i);
        const href = await link.getAttribute('href');

        // Check if the href attribute exists
        expect(href, `Link at index ${i} does not have an href attribute`).toBeDefined();

        // Optionally, you can check if the link is valid or follows certain patterns
        // Example: expect(href).toMatch(/https:\/\/expected-url-pattern/);

        // Optional: Navigate to the link and check the response or page content
        // Note: This might be outside the scope of a unit test for components and can be part of integration tests
    }
});