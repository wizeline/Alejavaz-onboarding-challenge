const {LogInPage} = require('./LogInPage');

class HomePage{

    /**
    * @param {import('@playwright/test').Page} page
    */
   
     constructor(page){
         this.page = page;
         this.signInButton = page.getByRole('link', { name: 'Log in' });
     }
 
     async pressLogInButton(){
         await this.signInButton.click();
         return new LogInPage(this.page);        
     }
 }
 module.exports = {HomePage};