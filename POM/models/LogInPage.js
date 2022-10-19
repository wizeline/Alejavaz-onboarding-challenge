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
    }

    async logInAsUser(userName, userPass){
        await this.emailTextBox().fill(userName);
        await this.passwordTextBox().fill(userPass);
        await this.logInButton.click();
        return new DashboardPage(page);
    }
}

module.exports = {LogInPage};