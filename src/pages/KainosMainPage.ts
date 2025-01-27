import { type Locator, type Page } from "@playwright/test";

export class KainosMainPage {
    readonly page: Page;
    readonly careersLink: Locator;
    readonly header: Locator;

    constructor(page: Page) {
        this.page = page;
        this.careersLink = page.locator('#header').getByRole('link', { name: 'Careers' });
        this.header = page.locator('//h1');
    }

    async goToCareersPage() {
        await this.careersLink.hover();
        await this.careersLink.nth(0).click();
    }

}