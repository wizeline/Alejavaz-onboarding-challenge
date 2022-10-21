const {DashboardPage} = require('./DashboardPage');

class LogInPage{

    /**
    * @param {import('@playwright/test').Page} page
    */

    constructor(page){
        this.page = page;
        this.emailTextBox = page.locator('#element-0');
        this.passwordTextBox = page.locator('#element-3');
        this.logInButton = page.locator('[data-gtm-id="start-email-login"]');
        this.incorrectCredentialsText = page.locator('form > div[class*="a83bd4e0 _266d6623 _8f5b5f2b f9408a0e"]');
        this.emptyEmailAddress = page.locator('#element-2');
        this.emptyPassAddress = page.locator('#element-5');

    }

    async logInAsUser(userName, userPass){
        await this.emailTextBox.fill(userName);
        await this.passwordTextBox.fill(userPass);
        await this.logInButton.click();
        return new DashboardPage(this.page);
    }
}
module.exports = {LogInPage};