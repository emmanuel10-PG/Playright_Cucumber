const {Given , When, Then } = require ('@cucumber/cucumber');
const {expect} = require('@playwright/test');
require('../../hooks/hooks.js')
// 
    //  "scripts": "test":"cucumber-js" en  ajoutant dans le fichier package.json , on execute avec 
    //  la commande npm run suivi du nom ("test") c est a dire test si c etait "t" inscrit on allait 
    // faire npm run t 
    // sans cette config on execute normalement en faisait : npx cucumber-js

  Given('I navigate to {string}', async function (url) { 
    await this.page.goto(url);
  });
  

  When('I enter my email {string}',  async function (email) {
   await this.page.getByTestId("login-email").fill(email);
  });
  

  When('I enter my password {string}', async function (password) {
    await this.page.getByTestId("login-password").fill(password);
  });
  

  When('I click on the button login', async function () {
    await this.page.getByTestId("login-submit").click();
  });

  
  Then('I should see {string}', async function (message) {
    await expect(this.page.getByTestId("home")).toHaveText(message);
  });