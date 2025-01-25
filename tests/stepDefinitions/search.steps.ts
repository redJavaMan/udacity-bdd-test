import { test, expect } from '../../fixtures/baseFixtures';
 import { createBdd } from 'playwright-bdd';
import { HomePage } from '../../pages/homePage';
import { Header } from '../../pages/header';
import { SearchApi } from '../../utilities/searchApi';
import { Utils } from '../../utilities/utils';

let searchedTerm: string;
 const { Given, When, Then } = createBdd(test);
let courses: string[];
let resApi: string[];

Given('the application is loaded successfully', async ({ homePage }) => {
  await homePage.goTo();
});

Given('user search for {string}', async ({ header, homePage}, searchTerm) => {
  searchedTerm = searchTerm;
  await header.search(searchTerm);
});

Given('user clicks on {string} Dropdown', async ({homePage}, dropDown) => {
  await homePage.selectDropDown(dropDown);
});

When('user search for {string} in Skill Dropdown', async ({homePage}, searchTerm) => {
  await homePage.searchInDropDown(searchTerm);
});

Then('user sees results matching the search term in the UI', async ({homePage}) => {
  courses=await homePage.validateSearchResults(searchedTerm);
});

Then('user fetch search results from the API', async ({request}) => {
  const searchApi = new SearchApi(request);
  resApi = await searchApi.getSearchResultsApi(searchedTerm);
  console.log(resApi);
});

Then('the UI results should match the API results', async ({ page }) => {
Utils.validateUIandAPIResults(resApi, courses);
});

Then('user should see a {string} message', async ({ homePage}, message) => {
  await expect(homePage.noResults).toHaveText(message);
});
