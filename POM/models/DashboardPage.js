const { request, expect } = require('@playwright/test');

const data = require('../data/data.json');

class DashboardPage{

    //Import playwright page object to add library autocompletion to class
    /**
    * @param {import('@playwright/test').Page} page
    */
    
    constructor(page){
        this.page = page;

        //Dashboard page locators
        this.addNewTaskButton = page.locator('.plus_add_button');
        this.addTask = page.locator('[type="submit"]');
        this.taskTitleTextbox = page.locator('.ProseMirror').nth(0);
        this.createdTask = page.locator('.task_content');
        this.taskContent = page.locator('ul > li div.markdown_content').nth(0);
        this.taskList = page.locator('.task_list_item');
        this.inboxButton = page.locator('#filter_inbox a');
    }

    //Create a # of new tasks depending on taskNumber received
    async addNewTask(task, taskNumber){
        await this.inboxButton.click();
        expect(await this.taskList.count()).toEqual(0);

        if(taskNumber == 1){
            await this.addNewTaskButton.click();
            await this.taskTitleTextbox.fill(task + taskNumber);
            await this.addTask.click();
        }
        else if(taskNumber == 10){
            await this.addNewTaskButton.click();
            for(let taskNum = 1 ; taskNum <= taskNumber; ++taskNum ){
                await this.taskTitleTextbox.fill(task + taskNum);
                await this.addTask.click();
            }
        }
    }
}
module.exports = {DashboardPage};
