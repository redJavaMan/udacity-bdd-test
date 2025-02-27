# Playwright-Cucumber TypeScript Testing Framework

## Overview
This repository contains an automated UI and API testing framework for Udacity Catalog using Playwright, Cucumber, TypeScript, and Allure reporting. The framework follows BDD principles and implements a robust Page Object Model architecture.

## Project Repository
[udacity-bdd-test](https://github.com/yourusername/udacity-bdd-test.git)

## Tech Stack
- TypeScript
- Playwright
- Cucumber
- Allure Reporting Framework
- Node.js

## Prerequisites
- Node.js 14 or higher
- npm 6.x or higher
- Chrome/Firefox/Edge browser
- Allure command line tool (for report generation)

## Project Structure
```
playwright-cucumber-ts/
├── src/
│   ├── pages/         # Page Object files
│   ├── api/           # API helper classes
│   ├── features/      # Feature files and support
│   ├── steps/         # Step definitions
│   └── utils/         # Utilities and helpers
├── cucumber.js        # Cucumber configuration
├── playwright.config.ts  # Playwright configuration
└── package.json       # Project dependencies
```

## Installation & Setup
```bash
# Clone the repository
git clone <repository-url>

# Navigate to project directory
cd udacity-bdd-test

# Install dependencies
npm install
```

## Test Configuration
The framework is configured through `playwright.config.ts` and `cucumber.js` files, enabling cross-browser testing, screenshot capture, and parallel execution.

## Test Scenarios

### Search Functionality Validation
- Validates UI search results against expected data
- Compares UI results with API data for consistency
- Verifies skill filtering functionality
- Tests pagination and sorting features

### Negative Testing
- Handles invalid search terms gracefully
- Verifies appropriate error messages
- Tests boundary conditions and edge cases

## Running Tests
```bash
# Run all tests
npm test

# Run specific features
npm test -- --tags "@search"

# Run tests with specific browser
npm test -- --browser=firefox

# Generate Allure report
npm run report
```

## Parallel Execution
The test suite is configured to run tests in parallel, maximizing execution efficiency. This is configured in the cucumber.js file.

## Reporting
The project uses Allure for comprehensive test reporting. To view the reports:

1. Run tests with Allure:
```bash
npm test
```

2. Generate and open the report:
```bash
npm run report
```

## Key Features
- Page Object Model implementation for maintainable test code
- API validation integrated with UI tests for complete coverage
- Cucumber for BDD approach and readable specifications
- TypeScript for type safety and improved code quality
- Allure reporting for detailed test results
- Support for parallel test execution
- Cross-browser testing support
- Screenshot capture on failure
- Custom utilities for common operations

## Contributing
1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Author
Your Name - [GitHub Profile](https://github.com/yourusername)
