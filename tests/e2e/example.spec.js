import { expect, test } from '@playwright/test';
import { Example } from '../../pageObjectModel/common/Example';
import { Colors } from '../../support/Colors';
import links from '../../config/links.json';

test.describe('My Example feature', async () => {
  let page;
  let example;

  test.beforeEach('Something which we should execute all the time', async ({ browser }) => {
    page = await browser.newPage();
    example = new Example(page);
    await example.navigate(links.exampleUrl);
  });

  // dummy test case to demo test steps
  test('get started link', async () => {
    await test.step('When user clicks the get started link.', async () => {
      await example.getStartedLink.click();
    });

    await example.navBar.validateNavbar();

    await test.step('Then the installation text should be indicated by green', async () => {
      await expect(example.installationText)
        .toHaveCSS('color', Colors.playwrightGreen);
    });
  });

  test('search', async () => {
    await test.step('When user try to search.', async () => {
      await example.getStartedLink.click();
      await example.navBar.search.click();

      await page.locator('.DocSearch-Input').fill('blabla');
    });

    // then...
  });
});
