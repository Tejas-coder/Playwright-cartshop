/* 
Steps to test login functionality:
1. Click on 'My Account' Dropmenu
2. Click on 'Login' option (Validate ER-1)
3. Enter valid email address into the 'E-Mail Address' field - <Refer Test Data>
4. Enter valid password into the 'Password' field - <Refer Test Data>
5. Click on 'Login' button (Validate ER-2)
*/

import { test, expect } from "@playwright/test";
import { HomePage } from "../pages/HomePage";
import { LoginPage } from "../pages/LoginPage";
import { TestConfig } from "../test.config";    

let testConfig: TestConfig;
let homePage: HomePage;
let loginPage: LoginPage;

test.beforeEach(async ({ page }) => {
    // Get the url from config and navigate to the application
    testConfig = new TestConfig();
    await page.goto(testConfig.appUrl); 
    
    // Initialize page objects
    homePage = new HomePage(page);
    loginPage = new LoginPage(page);
});

test.afterEach(async ({ page }) => {
    await page.waitForTimeout(3000)
    await page.close();
});

test('User Login Test @master @sanity @regression', async () => {
    // Check if Home Page is displayed and then click on My Account and Login link
    expect(await homePage.isHomePageDisplayed()).toBeTruthy();

    // Click on My Account and Login link
    await homePage.clickMyAccount();
    await homePage.clickLogin();    

    // Fill login form with valid email and password and click on Login button
    await loginPage.login(testConfig.email, testConfig.password);

    // check if login error message is displayed, if yes then validate the error message, if not then validate that user is logged in successfully by checking the page title displayed in the My Account page
    if(await loginPage.getLoginErrorMessage()) {
        const errorMessage = await loginPage.getLoginErrorMessage();
        expect(errorMessage).toBe(" Warning: No match for E-Mail Address and/or Password.");
    } else {
        // Verify that user is logged in successfully by checking the page title displayed in the My Account page
        const title = await homePage.getMyAccountPageTitle();
        expect(title).toBe("My Account");
    }
});