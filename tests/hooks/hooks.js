const{ After, AfterAll , Before, BeforeAll, Status, DefaultTimeout, setDefaultTimeout } = require("@cucumber/cucumber");

const { chromium } = require("@playwright/test");
const { config } = require("../../playwright.config");





// Configuration d attente explicite de 5 000 ms
const GlobalTimeout = config.expect?.timeout || 5000 
setDefaultTimeout(GlobalTimeout);

// Declaration de variable
let Browser;
let BrowserContext;
let page;


BeforeAll(async function (){

    // Lancer le navigateur
    Browser = await chromium.launch({ headless: false });

});


Before(async function () {
    // Creer un contexte et une page
    BrowserContext = await Browser.newContext();
    page = await BrowserContext.newPage();
    this.page = page;
})

After(async function ({ pickle , result }) {

    console.log(result?.status);
    if(result?.status === Status.PASSED){

        const img = await this.page.screenshot({
            path:`../../test-result/screenshots/`,
            type:"png",
        });

        await this.attach(img , "image/png"); // capture de l image d test de cucumber
    }
    await this.page.close();
    await BrowserContext.close(); 
})