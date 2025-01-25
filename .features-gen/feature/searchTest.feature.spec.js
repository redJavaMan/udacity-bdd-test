// Generated from: feature/searchTest.feature
import { test } from "../../fixtures/baseFixtures";

test.describe('Udacity Catalog Search Functionality', () => {

  test.beforeEach('Background', async ({ Given, page, homePage }) => {
    await Given('the application is loaded successfully', null, { page, homePage }); 
  });

  test('Validate Search Functionality', async ({ And, page, When, Then, request, homePage, header }) => { 
    await And('user search for "Testing"', null, { page, header, homePage }); 
    await And('user clicks on "Skill" Dropdown', null, { page, homePage }); 
    await When('user search for "Automation testing" in Skill Dropdown', null, { page, homePage }); 
    await Then('user sees results matching the search term in the UI', null, { page, homePage }); 
    await And('user fetch search results from the API', null, { request }); 
    await Then('the UI results should match the API results', null, { page }); 
  });

  test('Invalid Search with No Results', async ({ When, page, Then, homePage, header }) => { 
    await When('user search for "NonExistentTerm"', null, { page, header }); 
    await Then('user should see a "No Results Found" message', null, { page, homePage }); 
  });

});

// == technical section ==
test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use('feature/searchTest.feature'),
  $bddFileData: ({}, use) => use(bddFileData),
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":10,"pickleLine":9,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":7,"keywordOrig":"Given ","keywordType":"Context","isBg":true,"stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":10,"keywordOrig":"And ","keywordType":"Context","stepMatchArguments":[{"group":{"start":16,"value":"\"Testing\"","children":[{"start":17,"value":"Testing","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":12,"gherkinStepLine":11,"keywordOrig":"And ","keywordType":"Context","stepMatchArguments":[{"group":{"start":15,"value":"\"Skill\"","children":[{"start":16,"value":"Skill","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":13,"gherkinStepLine":12,"keywordOrig":"When ","keywordType":"Action","stepMatchArguments":[{"group":{"start":16,"value":"\"Automation testing\"","children":[{"start":17,"value":"Automation testing","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":14,"gherkinStepLine":13,"keywordOrig":"Then ","keywordType":"Outcome","stepMatchArguments":[]},{"pwStepLine":15,"gherkinStepLine":14,"keywordOrig":"And ","keywordType":"Outcome","stepMatchArguments":[]},{"pwStepLine":16,"gherkinStepLine":15,"keywordOrig":"Then ","keywordType":"Outcome","stepMatchArguments":[]}]},
  {"pwTestLine":19,"pickleLine":17,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":7,"keywordOrig":"Given ","keywordType":"Context","isBg":true,"stepMatchArguments":[]},{"pwStepLine":20,"gherkinStepLine":18,"keywordOrig":"When ","keywordType":"Action","stepMatchArguments":[{"group":{"start":16,"value":"\"NonExistentTerm\"","children":[{"start":17,"value":"NonExistentTerm","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":21,"gherkinStepLine":19,"keywordOrig":"Then ","keywordType":"Outcome","stepMatchArguments":[{"group":{"start":18,"value":"\"No results found\"","children":[{"start":19,"value":"No results found","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
]; // bdd-data-end