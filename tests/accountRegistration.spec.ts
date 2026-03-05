/*
Steps to test account registration:
1. Click on 'My Account' Drop menu
2. Click on 'Register' option 
3. Enter new Account Details into the Mandatory Fields (First Name, Last Name, E-Mail,Telephone, Password, Password Confirm and  Privacy Policy Fields)
4. Click on 'Continue' button (ER-1)
5. Click on 'Continue' button that is displayed in the 'Account Success' page (ER-2)"
*/

import { test, expect } from "@playwright/test";
import { HomePage } from "../pages/HomePage";
import { RegistrationPage } from "../pages/RegistrationPage";
import { RandomDataGenerator } from "../utils/randomDataGenerator";
import { TestConfig } from "../test.config";

let homePage: HomePage;
let registrationPage: RegistrationPage;

test.beforeEach(async ({ page }) => {
    // Get the url from config and navigate to the application
    const testConfig = new TestConfig();
    await page.goto(testConfig.appUrl);

    // Initialize page objects
    homePage = new HomePage(page);
    registrationPage = new RegistrationPage(page);
})

test.afterEach(async ({ page }) => {
    await page.waitForTimeout(3000)
    await page.close();
})

test('User Registration Test @master @sanity @regression', async () => {
    // Check if Home Page is displayed and then click on My Account and Register link
    expect(await homePage.isHomePageDisplayed()).toBeTruthy();
    await homePage.clickMyAccount();
    await homePage.clickRegister();

    // Generate random data for registration and fill the registration form and complete the registration process
    const firstName = RandomDataGenerator.generateFirstName();
    const lastName = RandomDataGenerator.generateLastName();
    const email = RandomDataGenerator.generateEmail();
    const telephone = RandomDataGenerator.generatePhoneNumber();
    const password = RandomDataGenerator.generatePassword();
    await registrationPage.completeRegistration({firstName, lastName, email, telephone, password});

    // Verify that account registration is successful by checking the success message displayed in the Account Success page
    const confirmationMessage = await registrationPage.getSuccessMessage();
    expect(confirmationMessage).toBe("Your Account Has Been Created!");
});