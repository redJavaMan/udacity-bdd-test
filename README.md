# Udacity UI BDD Test Framework

## Overview
This repository contains an automated UI and API testing framework for Udacity's catalog website, built using Playwright, Cucumber BDD, TypeScript, and Page Object Model design pattern. The framework enables end-to-end testing of search functionality, validating both UI components and API responses.

## Tech Stack
- **TypeScript**: For type-safe code
- **Playwright**: For browser automation
- **Playwright-BDD/Cucumber**: For behavior-driven development
- **Page Object Model**: For maintainable test architecture

## Prerequisites
- Node.js 14 or higher
- npm 6.x or higher
- Chrome browser (Firefox and WebKit configurations are available but commented out)

## Project Structure
```
├── .features-gen/            # Generated test files from feature files
├── fixtures/                 # Custom Playwright fixtures
├── pages/                    # Page Object files
│   ├── header.ts             # Header component with search functionality
│   └── homePage.ts           # Home page interactions
├── tests/
│   ├── feature/              # Feature files (Gherkin syntax)
│   │   └── searchTest.feature
│   └── stepDefinitions/      # Step definition files
│       └── search.steps.ts
├── utilities/                # Helper functions and API clients
│   ├── searchApi.ts          # API client for search functionality
│   └── utils.ts              # Common utilities and validation functions
├── playwright.config.ts      # Playwright and BDD configuration
└── package.json              # Project dependencies
```

## Features
- **BDD Approach**: Using Gherkin syntax for human-readable test specifications
- **Cross-browser Testing**: Configured for Chromium with options for Firefox and WebKit
- **API Testing**: Validates UI results against API responses
- **Page Object Model**: Organized page elements and actions for better maintenance
- **Parallel Execution**: Configured to run tests in parallel for efficiency

## Test Scenarios
The framework currently tests the following scenarios:

### Search Functionality
- Validates that search results in the UI match expected data
- Compares UI search results with API responses
- Tests filtering functionality using the Skills dropdown
- Handles negative scenarios with no search results

## Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/udacity-ui-bdd-test.git

# Navigate to project directory
cd udacity-ui-bdd-test

# Install dependencies
npm install
```

## Running Tests

```bash
# Run all tests
npx playwright-bdd test

# Run with specific browser
npx playwright-bdd test --project=chromium

# Generate and view HTML report
npx playwright show-report
```

## Adding New Tests

1. Create a new feature file in the `tests/feature/` directory
2. Implement the step definitions in `tests/stepDefinitions/`
3. Create page objects for any new pages in the `pages/` directory
4. Run the tests using the commands above

## Environment Configuration

The base URL for tests is configured in the `.env` file:

```
BASE_URL="https://www.udacity.com/catalog"
```

You can modify this to point to different environments if needed.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Code Style

This project uses ESLint and Prettier for code formatting:

```bash
# Check code style
npx eslint .

# Format code
npx prettier --write .
```

## Future Enhancements

- Add more test scenarios for other functionalities
- Implement visual regression testing
- Add reporting integration (Allure, etc.)
- Implement CI/CD pipeline integration

## Author
Mohammed Lukmanudin M - [GitHub Profile](https://github.com/redJavaMan)
