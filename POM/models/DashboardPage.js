class DashboardPage{

    /**
    * @param {import('@playwright/test').Page} page
    */
    
    constructor(page){
        this.page = page;
        this.addTaskButton = page.locator('.plus_add_button');
    }

    async addNewTask(){
        await this.addTaskButton().click();
    }

}



module.exports = {DashboardPage};