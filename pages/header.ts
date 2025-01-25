import { Page, Locator, expect } from '@playwright/test';
export class Header {
  private readonly searchBox: Locator;
  private readonly searchButton: Locator;
  private readonly searchResult: Locator;
  constructor(public readonly page: Page) {
    this.searchBox = this.page.getByRole('searchbox', { name: 'Search input' });
    this.searchButton = this.page.getByLabel('Search', { exact: true });
    this.searchResult = this.page.locator(
      '//div[@class="css-0"]//child::h1[@class="chakra-heading css-18hl2bw"]',
    );
  }

  async search(searchTerm: string) {
    await this.searchButton.click();
    await this.searchBox.fill(searchTerm);
    await this.searchBox.press('Enter');
    await this.page.waitForTimeout(2000);
    await expect(this.searchResult).toHaveText(
      `Search results for "${searchTerm}"`,
    );
  }
}
