# Playwright-Cucumber TypeScript Testing Framework

Automated UI and API testing framework for Udacity Catalog using Playwright, Cucumber, TypeScript and Allure reporting.

## Setup

```bash
git clone <repository-url>
cd udacity-bdd-test
npm install

playwright-cucumber-ts/
├── src/
│   ├── pages/         # Page Object files
│   ├── api/          # API helper classes
│   ├── features/     # Feature files and support
│   ├── steps/        # Step definitions
│   └── utils/        # Utilities and helpers
├── cucumber.js       # Cucumber configuration
└── playwright.config.ts  # Playwright configuration

# Run all tests
npm test

# Generate Allure report
npm run report

Features

Page Object Model implementation
API validation integrated with UI tests
Cucumber for BDD approach
TypeScript for type safety
Allure reporting
Support for parallel test execution
Cross-browser testing support
Screenshot capture on failure

Test Scenarios

Search Functionality Validation

Validates UI search results
Compares UI results with API data
Verifies skill filtering


Negative Testing

Handles invalid search terms
Verifies error messages
