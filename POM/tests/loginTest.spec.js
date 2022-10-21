const { test, expect } = require('@playwright/test');
const data = require('../data/data.json');
import {HomePage} from '../models/HomePage';


test.describe('Given a new user when load the application he is able to access', ()=>{

  test.beforeEach(async ({page})=>{
    await page.goto(data.toDoistUrl);
  })

  test('TC1: Given a registrated user when enter his credentials on login page then he is able to access', async ({ page }) => {
    const homePage = new HomePage(page);
    const loginPage = await homePage.pressLogInButton();
    await loginPage.logInAsUser(data.correctEmail, data.correctPassword);
    await expect(page).toHaveTitle('Today: Todoist');
  });

  test('TC2: Given a registrated user when enter incorrect username on login page then he is not able to access', async ({ page }) => {
    const homePage = new HomePage(page);
    const loginPage = await homePage.pressLogInButton();
    await loginPage.logInAsUser(data.incorrectEmail, data.correctPassword);
    expect(await loginPage.incorrectCredentialsText).toHaveText(data.wrongCredentialsMessage);
    
  });

  test('TC3: Given a registrated user when enter incorrect password on login page then he is not able to access', async ({ page }) => {
    const homePage = new HomePage(page);
    const loginPage = await homePage.pressLogInButton();
    await loginPage.logInAsUser(data.correctEmail, data.incorrectPassword);
    await loginPage.incorrectCredentialsText.waitFor({state:'visible'});
    expect(await loginPage.incorrectCredentialsText).toHaveText(data.wrongCredentialsMessage);
  });

  test('TC4: Given a registrated user when no credentials are entered in login page then a error message is displayed', async ({ page }) => {
    const homePage = new HomePage(page);
    const loginPage = await homePage.pressLogInButton();
    await loginPage.logInButton.click();
    expect(await loginPage.emptyEmailAddress).toHaveText(data.emptyEmailMessage);
});

  test('TC5: Given a registrated user when no password is entered in login page then an error message is displayed on screen', async ({ page }) => {
    const homePage = new HomePage(page);
    const loginPage = await homePage.pressLogInButton();
    await loginPage.logInAsUser(data.correctEmail, data.correctPassword="");
    await expect(loginPage.emptyPassAddress).toContainText(data.emptyPasswordMessage);
  });
})
