const {LogInPage} = require('./LogInPage');

class HomePage{

    //Import playwright page object to add library autocompletion to class
    /**
    * @param {import('@playwright/test').Page} page
    */
   
     constructor(page){
         this.page = page;

         //Home page locators
         this.signInButton = page.getByRole('link', { name: 'Log in' });
     }
 
     //Press the Log In button in home page
     async pressLogInButton(){
         await this.signInButton.click();
         return new LogInPage(this.page);        
     }
 }
 module.exports = {HomePage};