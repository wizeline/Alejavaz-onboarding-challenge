const {test, expect} = require('@playwright/test');
import {HomePage} from '../models/HomePage';
import { DashboardPage } from '../models/DashboardPage';
const data = require('../data/data.json');

test.describe('Given a logged user when tasks are created then user is able to add tasks', ()=>{

    /**
    * @param {import('@playwright/test').Page} page
    */

    test.beforeEach(async({page})=>{
        await page.goto(data.toDoistUrl);
    });

    test('TC1: Given logged user when a task is created then the task is displayed on dashboard', async ({page}) => {
        const homePage = new HomePage(page);
        const loginPage = await homePage.pressLogInButton();

        const dashBoard = await loginPage.logInAsUser(data.correctEmail, data.correctPassword);
        
        await expect(page).toHaveTitle('Today: Todoist');
        await dashBoard.addNewTask(data.newTask, parseInt(data.taskNumberTC1));
        expect(await dashBoard.taskContent).toHaveText(data.newTask + data.taskNumberTC1);

    });

    test('TC2: Given a logged user when 10 tasks are created then all the tasks are displayed on dashboard', async ({page}) => {

        const homePage = new HomePage(page);
        const loginPage = await homePage.pressLogInButton();

        const dashBoard = await loginPage.logInAsUser(data.correctEmail, data.correctPassword);
        
        await expect(page).toHaveTitle('Today: Todoist');
        await dashBoard.addNewTask(data.newTask, parseInt(data.taskNumberTC2));
        expect(await dashBoard.taskContent.count() == parseInt(data.taskNumberTC2));
    });
})