import { Page, Locator } from "@playwright/test";

export class RegistrationPage {
    private readonly page: Page;
    
    // Locators
    private txtFirstName: Locator;
    private txtLastName: Locator;
    private txtEmail: Locator;
    private txtTelephone: Locator;
    private txtPassword: Locator;
    private txtConfirmPassword: Locator;
    private chkPrivacyPolicy: Locator;
    private btnContinue: Locator;
    private msgSuccess: Locator;

    // Constructor
    constructor(page: Page) {
        this.page = page;
        this.txtFirstName = page.locator('#input-firstname');
        this.txtLastName = page.locator('#input-lastname');
        this.txtEmail = page.locator('#input-email');
        this.txtTelephone = page.locator('#input-telephone');
        this.txtPassword = page.locator('#input-password');
        this.txtConfirmPassword = page.locator('#input-confirm');
        this.chkPrivacyPolicy = page.locator('input[name="agree"]');
        this.btnContinue = page.locator('input[type="submit"]');
        this.msgSuccess = page.locator('//div[@id="content"]/h1[text()="Your Account Has Been Created!"]');
    }

    // Action Methods
    // Fill registration form
    async fillRegistrationForm(firstName: string, lastName: string, email: string, telephone: string, password: string): Promise<void> {
        try {   
            await this.txtFirstName.fill(firstName);
            await this.txtLastName.fill(lastName);
            await this.txtEmail.fill(email);
            await this.txtTelephone.fill(telephone);
            await this.txtPassword.fill(password);
            await this.txtConfirmPassword.fill(password);
        } catch (error) {
            console.error("Error filling registration form: ", error); 
            throw error;
        }       
    }

    // Accept privacy policy
    async acceptPrivacyPolicy(): Promise<void> {
        try {
            await this.chkPrivacyPolicy.check();
        } catch (error) {
            console.error("Error accepting privacy policy: ", error); 
            throw error;
        }
    }

    // Click on Continue button
    async clickContinue(): Promise<void> {
        try {
            await this.btnContinue.click();
        } catch (error) {
            console.error("Error clicking Continue button: ", error); 
            throw error;
        }
    }  
    
    // Get success message    
    async getSuccessMessage(): Promise<string> {
        try {
            return await this.msgSuccess.innerText() || '';
        } catch (error) {
            console.error("Error getting success message: ", error); 
            throw error;
        }   
    }

    // Complete registration process
    async completeRegistration(userData: { firstName: string, lastName: string, email: string, telephone: string, password: string }): Promise<void> {
        try {
            await this.fillRegistrationForm(userData.firstName, userData.lastName, userData.email, userData.telephone, userData.password);
            await this.acceptPrivacyPolicy();
            await this.clickContinue();
        } catch (error) {
            console.error("Error completing registration process: ", error); 
            throw error;
        }
    }
}