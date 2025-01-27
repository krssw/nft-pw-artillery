import { test, expect } from '@playwright/test';
import { KainosMainPage } from '../../pages/KainosMainPage.js';
import { CookiePage } from '../../pages/CookiePage.js';
import { CareersPage } from '../../pages/CareersPage.js';

let kainosMainPage: KainosMainPage;
let cookiePage: CookiePage;
let careersPage: CareersPage;
const expectedTitle: string = "Digital Transformation Experts and Workday Partners | Kainos";
const expectedHeader: string = "True partners change the world together";

test.beforeEach(async ({page}) => {
  console.log('URL:', process.env.URL);
  await page.goto(`${process.env.URL}`);
  kainosMainPage = new KainosMainPage(page);
  cookiePage = new CookiePage(page);
  await cookiePage.clickAcceptCookiesButton();
});

test.describe('Testing Main Page title and header', async () => {
  test('Check if correct title is displayed', async ({page}) => {
    await expect(page).toHaveTitle(expectedTitle);
  });
  
  test('Check if correct header is displayed', async () => {
    await expect(kainosMainPage.header).toHaveText(expectedHeader);
  });
});

test.describe('Testing the Careers Page', () => {
  test.beforeEach(async ({page}) => {
    careersPage = new CareersPage(page);
  });

  test('Check if navigation was successful', async ({}) => {
    await kainosMainPage.goToCareersPage();
    await careersPage.clickAcceptCookieButton();
  });
});

