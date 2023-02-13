const {request} = require('@playwright/test')
const data = require('../data/data.json');

class ClearItems{

    constructor(page){
        this.page = page;
    }

    async cleanTasks(){

        const apiContext = await request.newContext();
        const apiResponse = await apiContext.get(data.todoisApi, {
            headers:{
                'authorization' : `Bearer ${data.todoisToken}`,
                'content-type' : 'application-json'
            }
        })
        const jsonResponse = await apiResponse.json();
        let activeTasks = jsonResponse.length;
        while(activeTasks != 0){
            let apicall = data.todoisApi+jsonResponse[activeTasks-1].id;
            this.deleteApi(apicall);
            activeTasks--;
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

module.exports = {ClearItems};