const {DashboardPage} = require('./DashboardPage');

class LogInPage{

    //Import playwright page object to add library autocompletion to class
    /**
    * @param {import('@playwright/test').Page} page
    */

    constructor(page){
        this.page = page;

        //Login page locators
        this.emailTextBox = page.locator('#element-0');
        this.passwordTextBox = page.locator('#element-3');
        this.logInButton = page.locator('[data-gtm-id="start-email-login"]');
        this.incorrectCredentialsText = page.locator('.a83bd4e0._266d6623._8f5b5f2b._2a3b75a1');
        this.emptyEmailAddress = page.locator('#element-2');
        this.emptyPassAddress = page.locator('#element-5');
        


    }

    //Log in as user returning a dashboard page new object
    async logInAsUser(userName, userPass){
        await this.emailTextBox.fill(userName);
        await this.passwordTextBox.fill(userPass);
        await this.logInButton.click();
        return new DashboardPage(this.page);
    }
}
module.exports = {LogInPage};