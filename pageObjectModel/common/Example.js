import { Navbar } from './Navbar';
// import {Footer} from "./Footer";
import links from '../../config/links.json';

export class Example {
  constructor(page) {
    this.page = page;
    this.navBar = new Navbar(page);
    // this.footer = new Footer(page);
    this.getStartedLink = this.page.getByRole('link', { name: 'Get started' });
    this.installationText = this.page.locator('span', { hasText: 'Installation' });
  }

  async navigate() {
    await this.page.goto(links.exampleUrl);
    await this.page.waitForURL(links.exampleUrl);
  }
}
