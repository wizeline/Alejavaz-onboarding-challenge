const {LogInPage} = require('./LogInPage');

class HomePage{

    /**
    * @param {import('@playwright/test').Page} page
    */
   
     constructor(page){
         this.page = page;
         this.signInButton = page.locator('[href*=login]');   
     }
 
     async pressLogInButton(){
         await this.signInButton.click();
         return new LogInPage(page);        
     }
 }
 module.exports = {HomePage};