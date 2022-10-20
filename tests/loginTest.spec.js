// @ts-check
const { test, expect } = require('@playwright/test');
const {HomePage} = require('../POM/models/HomePage');
const {LogInPage} = require('../POM/models/LogInPage');
const data = require('../POM/data/data.json');

test.describe('Given a new user when load the application he is able to access', ()=>{

  test.beforeEach(async ({page})=>{
    await page.goto(data.toDoistUrl);
  })

  test('Given a registrated user when enter his credentials on login page then he is able to access Todoist webapp', async ({ page }) => {

    const homePage = new HomePage(page);
    const loginPage = await homePage.pressLogInButton();
    await loginPage.logInAsUser(data.correctEmail, data.correctPassword);
    await expect(page).toHaveTitle('Today: Todoist');
  });

  test('Given a registrated user when enter incorrect username on login page then he is not able to access Todoist webapp', async ({ page }) => {

    const homePage = new HomePage(page);
    const loginPage = await homePage.pressLogInButton();
    await loginPage.logInAsUser(data.incorrectEmail, data.correctPassword);
    await expect(loginPage.incorrectCredentialsText).toBeVisible();
  });

  test('Given a registrated user when enter incorrect password on login page then he is not able to access Todoist webapp', async ({ page }) => {

    const homePage = new HomePage(page);
    const loginPage = await homePage.pressLogInButton();
    await loginPage.logInAsUser(data.correctEmail, data.incorrectPassword);
    await expect(loginPage.incorrectCredentialsText).toBeVisible();
  });

  test('Given a registrated user when no credentials are entered in login page then he is not able to access Todoist webapp', async ({ page }) => {

    const homePage = new HomePage(page);
    const loginPage = await homePage.pressLogInButton();
    await loginPage.logInButton.click();
    await expect(loginPage.incorrectCredentialsText).toBeVisible();

  });
})


