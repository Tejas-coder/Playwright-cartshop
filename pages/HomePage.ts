import { Page, expect, Locator } from "@playwright/test";

export class HomePage {
    private readonly page: Page;
    
    // Locators
    private linkMyAccount: Locator;
    private linkRegister: Locator;
    private linkLogin: Locator;
    private txtSearchBox: Locator;
    private btnSearch: Locator;

    // Constructor
    constructor(page: Page) {
        this.page = page;
        this.linkMyAccount = page.locator('//span[text()="My Account"]');
        this.linkRegister = page.locator('//a[text()="Register"]');
        this.linkLogin = page.locator('//a[text()="Login"]');
        this.txtSearchBox = page.locator('input[name="search"]');
        this.btnSearch = page.locator('//input[@name="search"]/following-sibling::span/button');
    }

    // Action Methods
    // Check if Home Page is displayed
    async isHomePageDisplayed(): Promise<boolean> {
        const title:string = await this.page.title();
        if(title) {
            return true;
        } else {
            return false;
        }   
    }

    // Click on My Account link
    async clickMyAccount(): Promise<void> {
        try {
            await this.linkMyAccount.click();
        } catch (error) {
            console.error("Error clicking My Account link: ", error); 
            throw error;
        }
    }

    // Click on Login link
    async clickLogin(): Promise<void> {
        try {
            await this.linkLogin.click();
        } catch (error) {
            console.error("Error clicking Login link: ", error); 
            throw error;
        }
    }

    // Click on Register link
    async clickRegister(): Promise<void> {
        try {
            await this.linkRegister.click();
        } catch (error) {
            console.error("Error clicking Register link: ", error); 
            throw error;
        }
    }

    // Enter product name in search box
    async enterProductName(productName: string): Promise<void> {
        try {
            await this.txtSearchBox.fill(productName);
        } catch (error) {
            console.error("Error entering product name in search box: ", error); 
            throw error;
        }
    }

    // Click on Search button
    async clickSearch(): Promise<void> {
        try {
            await this.btnSearch.click();
        } catch (error) {
            console.error("Error clicking Search button: ", error); 
            throw error;
        }
    }

    async getMyAccountPageTitle(): Promise<string> {
        try {
            return await this.page.title();
        } catch (error) {
            console.error("Error getting My Account page title: ", error); 
            throw error;
        }
    }
}