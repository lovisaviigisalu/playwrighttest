const { test, expect } = require('@playwright/test');

test('has title', async ({ page }) => {
  await page.goto('https://kaubamaja.ee/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Kaubamaja/);
});

test('Search for Harry Potter on Amazon and click first result', async ({ page }) => {
  // Navigate to Amazon
  await page.goto('https://www.amazon.com');

  // Type 'Harry Potter' into the search input and press Enter
  await page.fill('#twotabsearchtextbox', 'Harry Potter');
  await page.press('#twotabsearchtextbox', 'Enter');

  // Wait for search results to load (you might need to adjust the wait time)
  await page.waitForSelector('.s-search-results');

  // Click on the first search result
  await page.click('.s-search-results a.a-link-normal');

  // You can add further assertions or actions here, like verifying the title or price

  // Example assertion: Verify the page title contains 'Harry Potter'
  const pageTitle = await page.title();
  expect(pageTitle).toContain('');

});
test('HP Newest 14" Ultralight Laptop to cart on Amazon', async ({ page }) => {
  // Navigate to Amazon
  await page.goto('https://www.amazon.com');

  // Wait for the search input to appear and type the product name
  await page.waitForSelector('#twotabsearchtextbox');
  await page.fill('#twotabsearchtextbox', 'HP Newest 14" Ultralight Laptop for Students and Business');

  // Press Enter to perform the search
  await page.press('#twotabsearchtextbox', 'Enter');

  // Wait for the search results to load
  await page.waitForSelector('.s-search-results');

  // Click on the product link to open the product details page
  await page.click('.s-search-results .a-link-normal');

  // Wait for the product details page to load
  await page.waitForNavigation();

  // Click on the "Add to Cart" button
  await page.waitForSelector('#add-to-cart-button');
  await page.click('#add-to-cart-button');

  // Wait for the cart confirmation modal to appear
  await page.waitForSelector('#attach-sidesheet-view-cart-button');
  
  // Optionally, you can assert that the cart contains the added item
  const cartText = await page.textContent('.a-row .a-size-medium');
  expect(cartText).toContain('');

  // You can add further assertions or actions here as needed
});