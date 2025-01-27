import { expect, Page } from "@playwright/test";
import { CareersPage } from "../../pages/CareersPage";
import { CookiePage } from "../../pages/CookiePage";
import { KainosMainPage } from "../../pages/KainosMainPage";

export const config = {
  target: 'https://www.kainos.com',
  engines: {
    playwright: {}
  }
};

export const scenarios = [{
  engine: 'playwright',
  testFunction: artilleryScript
}];

let kainosMainPage: KainosMainPage;
let cookiePage: CookiePage;
let careersPage: CareersPage;

export async function artilleryScript(page: Page) {

  cookiePage = new CookiePage(page);
  careersPage = new CareersPage(page);
  kainosMainPage = new KainosMainPage(page);

  await page.goto('https://www.kainos.com');
  await cookiePage.clickAcceptCookiesButton();
  await expect(page).toHaveTitle("Digital Transformation Experts and Workday Partners | Kainos");
  await expect(kainosMainPage.header).toHaveText("True partners change the world together");
  await kainosMainPage.goToCareersPage();
  await careersPage.clickAcceptCookieButton();
}