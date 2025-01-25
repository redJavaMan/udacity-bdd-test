import { Header } from '../pages/header';
import { HomePage } from '../pages/homePage';
import { test as bddTest } from 'playwright-bdd';

type Fixtures = {
  homePage: HomePage;
  header: Header;
};

export const test = bddTest.extend<Fixtures>({
  homePage: async ({ page }, use) => {
    await use(new HomePage(page));
  },
  header: async ({ page }, use) => {
    await use(new Header(page));
  },
});

export { expect } from '@playwright/test';
