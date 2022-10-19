class DashboardPage{

    /**
    * @param {import('@playwright/test').Page} page
    */
    
    constructor(page){
        this.page = page;
        this.addTaskButton = page.locator('.plus_add_button');
        this.taskText = page.locator('[placeholder="Description"]');
    }

    async addNewTask(task, taskNumber){
        await this.addTaskButton().click();
        await this.taskText().type(task + parseInt(taskNumber));
    }

}
module.exports = {DashboardPage};