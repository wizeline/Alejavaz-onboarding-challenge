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
        this.taskTitleTextbox = page.locator('.DraftEditor-editorContainer');
        this.taskContent = page.locator('ul > li div.markdown_content');
        this.taskList = page.locator('.task_list_item');
        this.inboxButton = page.locator('#filter_inbox a');
    }

    //Create a # of new tasks depending on taskNumber received
    async addNewTask(task, taskNumber){
        await this.inboxButton.click();
        this.deleteTasks();
        expect(await this.taskList.count()).toEqual(0);
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

    async deleteTasks(){
        let tasks = await this.taskList.count();
        let task = 0;
        while (task < tasks){
            const elements = await this.page.locator('ul.items > li[id*="task-"]');
            let taskNumber = await elements.nth(task).getAttribute('data-item-id');
            let apicall = (data.todoisDeleteApi+taskNumber);
            this.deleteApi(apicall);
            task++;
        }
        
    }

    async deleteApi(apicall){
        let apiContext = await request.newContext();
        await apiContext.delete(apicall, {
            headers:{
                'authorization' : `Bearer ${data.todoisToken}`,
                'content-Type' : 'application/json'
            }, 
        } )
    }
}
module.exports = {DashboardPage};
