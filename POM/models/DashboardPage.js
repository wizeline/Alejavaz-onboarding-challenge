class DashboardPage{

    /**
    * @param {import('@playwright/test').Page} page
    */
    
    constructor(page){
        this.page = page;
        this.addNewTaskButton = page.locator('.plus_add_button');
        this.addTask = page.locator('[type="submit"]');
        this.taskTitleTextbox = page.locator('.DraftEditor-editorContainer');
        this.taskContent = page.locator('ul > li div.markdown_content');
    }

    async addNewTask(task, taskNumber){
        if(taskNumber == 1){
            await this.addNewTaskButton.click();
            await this.taskTitleTextbox.type(task + taskNumber);
            await this.addTask.click();
        }
        else if(taskNumber == 10){
            await this.addNewTaskButton.click();
            for(let taskNum = 1 ; taskNum <= taskNumber; ++taskNum ){
                await this.taskTitleTextbox.type(task + taskNum);
                await this.addTask.click();
            }
        }
    }
}
module.exports = {DashboardPage};