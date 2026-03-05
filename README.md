# Playwright Project

Automated end-to-end testing framework using [Playwright](https://playwright.dev/) for web application UI tests, with Allure reporting integration.

## Project Structure
- **tests/**: Contains Playwright test specs (e.g., login, registration)
- **pages/**: Page Object Model classes for UI abstraction
- **utils/**: Utility functions (e.g., random data generation)
- **data/**: Test data files (CSV, JSON)
- **playwright.config.ts**: Playwright configuration
- **test.config.ts**: Test data and app configuration
- **allure-report/**: Generated Allure HTML reports
- **allure-results/**: Allure raw results
- **playwright-report/**: Playwright HTML reports

## Key Features
- Playwright test automation with TypeScript
- Allure reporting for rich test results
- GitHub Actions CI workflow for automated test runs
- Example tests: login, account registration

## Setup Instructions
### Manual Step
1. **Install dependencies**
   ```sh
   npm install
   npm install -D allure-playwright
   npm install -g allure-commandline --force
   ```
2. **Run Playwright tests**
   - Master suite:
     ```sh
     npm run test-master
     ```
   - Regression suite:
     ```sh
     npm run test-regression
     ```
3. **View Reports**
   - Playwright HTML report: open `playwright-report/index.html`
   - Allure report: open `allure-report/index.html`

### Automated Step
- **Run the env_setup.bat file**


## Configuration
- Update `test.config.ts` for app URL, credentials, and product details.
- Add/modify test data in `data/` as needed.

## CI/CD
- GitHub Actions workflow in `.github/workflows/playwright.yml` runs tests on push/pull request to `master` and uploads reports as artifacts.

## Dependencies
- [@playwright/test](https://www.npmjs.com/package/@playwright/test)
- [allure-playwright](https://www.npmjs.com/package/allure-playwright)
- [@faker-js/faker](https://www.npmjs.com/package/@faker-js/faker)
- [csv-parse](https://www.npmjs.com/package/csv-parse)
- [xlsx](https://www.npmjs.com/package/xlsx)

## Author
- Tejas Karanjavkar
- tejaskaranjavkar@gmail.com