import { expect } from '@playwright/test';

export class Navbar {
  constructor(page) {
    this.page = page;
    this.navbar = this.page.locator('.navbar');
    this.heading = this.page.getByRole('heading', { name: 'Installation' });
    this.search = this.page.locator('.DocSearch-Button-Container');
  }

  async validateNavbar() {
    await expect(this.navbar).toBeVisible();
    await expect(this.search).toBeVisible();
    // ... further validation
  }
}
