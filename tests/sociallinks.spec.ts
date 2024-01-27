// import { browser } from "process";

// const { test, expect } = require('@playwright/test');

// test('Socials Link Test', async ({ page }) => {
//     await page.goto('https://thexplorer.vercel.app/');


//     //Comment out two of the three tests and run on each link, one at a time.
//     //instagram test
//     const instaLink = page.locator('#instagram');

//     // await expect(instaLink).toBeVisible();

//     // // Step 4: Verify the href attribute of the link
//     // const href = await instaLink.getAttribute('href');
//     // expect(href).toBe('https://instagram.com');

//     const [newPage] = await Promise.all([
//         page.waitForEvent('popup'),
//         instaLink.click()
//     ]);

//     // Step 4: Verify the URL of the new page
//     await expect(newPage).toHaveURL('https://www.instagram.com');

//     await newPage.close();


//     //twitter test
//     const twitterLink = page.locator('#twitter');

//     const [newPage] = await Promise.all([
//         page.waitForEvent('popup'),
//         instaLink.click()
//     ]);
//     await expect(newPage).toHaveURL('https://www.twitter.com');

//     await newPage.close();


//     //tiktok test
//     const tiktokLink = page.locator('#tiktok');

//     const [newPage] = await Promise.all([
//         page.waitForEvent('popup'),
//         instaLink.click()
//     ]);

//     // Step 4: Verify the URL of the new page
//     await expect(newPage).toHaveURL('https://www.tiktok.com');

//     await newPage.close();
// });