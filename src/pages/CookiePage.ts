import { type Locator, type Page } from "@playwright/test";

export class CookiePage {
    readonly page: Page;
    readonly acceptCookiesButton: Locator;
    readonly doNotAcceptCookieButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.acceptCookiesButton = page.locator('button', { hasText: 'I Accept Cookies' });
        this.doNotAcceptCookieButton = page.locator('button', { hasText: 'I Do Not Accept Cookies' });
    }

    async clickAcceptCookiesButton() {
        await this.acceptCookiesButton.click();
    }

    async clickDoNotAcceptCookiesButton() {
        await this.doNotAcceptCookieButton.click();
    }
}