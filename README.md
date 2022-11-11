# Alejavaz-onboarding-challenge
QA Onboarding challenge

<h4 align="center">QA buddy program for ToDoist Challenge Frontend and Backend.</h4>

<p align="center">
  <a href="#sparkles-key-features">Key Features</a> •
  <a href="#package-packages">Packages</a> •
  
</p>

## :sparkles: Key Features

* **alejavaz-onboarding-challenge** - Frontend and Backend living within the same repository.

## :package: Packages

- **@ToDoist-FrontEnd** - Playwright
- **@ToDoist-BackEnd** - Postman and Newman 

## :blue_book: Setup

To clone and run this application, you'll need the following:
- [Git](https://git-scm.com) 
- [Node.js](https://nodejs.org/en/download/)
- [Npm](https://www.npmjs.com/)
- [Newman](https://www.npmjs.com/package/newman)
- [Jest](https://jestjs.io/)

```bash
# Clone this repository
$ git clone git@github.com:wizeline/Alejavaz-onboarding-challenge.git

# Go into the repository
$ cd alejavaz-onboarding-challenge

# Install dependencies
$ npm install

# Log in credentials 
# can be modified on POM/data/data.json
"correctEmail" : "a_vazquez_d@yahoo.com",
"correctPassword" : "Td@159357",
"incorrectEmail" : "incorrectemail@hotmail.com",
"incorrectPassword" : "wrongpass",

# Number of task created by default 
# TC1 : 1
# TC2 : 10
# can be modified on POM/data/data.json
# Additional test cases can be added
"taskNumberTC1" : "1",
"taskNumberTC2" : "10",

```
### Before running 
It needs to be considered that this project uses `data.json` file to work properly.

### Run FrontEnd 
In order to run FrontEnd, execute the following commands 

#### Scritps to run FE
```bash
# On the shared folder
CHROME:
# npm run chromium
FIREFOX:
# npm run firefox
SAFARI:
# npm run safari
MULTIPLE BROWSERS:
# npm run project
SHOW REPORT:
# npm run reportHtml
SHOW ALLURE REPORT:
# npm run allure
```
The selected script will run the all tests in parallel & headed mode in the corresponding browser.

### Run BackEnd
In order to run Backend, execute the following commands 

#### Scripts to run BE
```bash
# npm run be


