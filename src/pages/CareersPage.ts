import { type Locator, type Page } from "@playwright/test";

export class CareersPage {
    readonly page: Page;
    readonly allowCookiesButton: Locator;
    readonly jobsInputField: Locator;
    readonly findJobsButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.allowCookiesButton = page.locator('button', { hasText: 'Allow' });
        this.jobsInputField = page.getByPlaceholder('Search for Job title, keyword');
        this.findJobsButton = page.locator('button', { hasText: 'Search'})
    }

    async clickAcceptCookieButton() {
        await this.allowCookiesButton.click();
    }
}