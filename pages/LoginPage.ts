import {Page, Locator}  from "@playwright/test";

export class LoginPage {
    private readonly page: Page;
    
    // Locators
    private txtEmail: Locator;
    private txtPassword: Locator;
    private btnLogin: Locator;
    private msgLoginError: Locator;

    // Constructor
    constructor(page: Page) {
        this.page = page;
        this.txtEmail = page.locator('#input-email');
        this.txtPassword = page.locator('#input-password');
        this.btnLogin = page.locator('input[type="submit"]');
        this.msgLoginError = page.locator('//div[contains(@class, "alert-danger")]');
    }

    // Action Methods
    // Fill login form
    async fillLoginForm(email: string, password: string): Promise<void> {
        try {   
            await this.txtEmail.fill(email);
            await this.txtPassword.fill(password);
        } catch (error) {
            console.error("Error filling login form: ", error); 
            throw error;
        }       
    }

    // Click on Login button
    async clickLogin(): Promise<void> {
        try {
            await this.btnLogin.click();
        } catch (error) {
            console.error("Error clicking Login button: ", error); 
            throw error;
        }
    }

    async login(email: string, password: string): Promise<void> {
        await this.fillLoginForm(email, password);
        await this.clickLogin();
    }

    // Get login error message    
    async getLoginErrorMessage(): Promise<string> {
        try {
            if (await this.msgLoginError.isVisible({ timeout: 2000 })) {
                return await this.msgLoginError.innerText();
            }
            return '';
        } catch (error) {
            return ''; // If page navigated, just return empty
        }
    }
}