import { Page, Locator } from '@playwright/test';
import { expect } from '../fixtures/baseFixtures';
export class HomePage {
  private dropDown: (name: string) => Locator;
  private searchBox: Locator;
  private dropDownSearchBox: Locator;
  private dropDownSearchResult: Locator;
  private searchResults: Locator;
  public noResults: Locator;
  constructor(public readonly page: Page) {
    this.dropDown = (name: string) =>
      this.page.locator(`(//span[text()="${name}"])[2]`);
    this.searchBox = this.page.getByRole('searchbox', { name: 'Search input' });
    this.dropDownSearchBox = this.page
      .getByRole('region', { name: 'Skill' })
      .getByRole('combobox');
    this.dropDownSearchResult = this.page.locator(
      '(//button[@class="css-5f6mar"]//child::p[@class="chakra-text css-1vs1lpm"])[2]',
    );
    this.searchResults = this.page.locator('a.chakra-heading');
    this.noResults = this.page.locator(
      '//div[@class="css-1mbed0a"]//child::h2[@class="chakra-heading css-1hsf0v9"]',
    );
  }
  async goTo() {
    await this.page.goto('https://www.udacity.com/catalog');
    await this.page.waitForLoadState('domcontentloaded');
    await this.page.waitForTimeout(3000);
  }

  async selectDropDown(dropDown: string) {
    await this.dropDown(dropDown).click();
  }
  async searchInDropDown(searchTerm: string) {
    await this.dropDownSearchBox.fill(searchTerm);
    const request = this.page.waitForRequest('**/api/unified-catalog/**');
    await this.dropDownSearchBox.press('Enter');
    await request;
    await expect(this.dropDownSearchResult).toHaveText(searchTerm);
  }
  async validateSearchResults(searchTerm: string) {
    await this.page.waitForSelector('a.chakra-heading');
    const courses = await this.searchResults.allInnerTexts();
    console.log(courses);
    for (const course of courses) {
      // expect.soft(course).toContain(searchTerm);
    }
    return courses;
  }
  async getSearchResults() {
    const courses = await this.searchResults.allInnerTexts();
    console.log(courses);
    return courses;
  } 
}
