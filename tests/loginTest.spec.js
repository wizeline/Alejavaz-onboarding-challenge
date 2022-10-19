// @ts-check
const { test, expect } = require('@playwright/test');
const {HomePage} = require('../POM/models/HomePage');
const {LogInPage} = require('../POM/models/LogInPage');
const dataSet = require('../POM/data/testingData.json');

test.describe('Given a new user when load the application he is able to access', ()=>{

  test.beforeAll(async ({page})=>{
    await page.goto(dataSet.toDoistURL);
  });

  test('Given a registrated user when enter his credentials on login page then he is able to access Todoist webapp', async ({ page }) => {

    const homePage = new HomePage(page);
    const loginPage = await homePage.pressLogInButton();
    await loginPage.logInAsUser(dataSet.userEmail, dataSet.userPassword);
    await expect(page).toHaveTitle('Today: Todoist');
  });
})


