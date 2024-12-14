**CYPRESS**

1.It is a NODE js based testing framework which works in an asynchronous manner.
2.Overcomes all the drawbacks of Selenium and other web automation techniques
3.It can be utilised in 2 forms - an app and a cloud
4.It supported by 2 lang- TS, JS

**HOW is CYPRESS different from SELENIUM/cucumber**
1. It comes fully baked- have integrated libraries of test, reporting, snapshot, video, browser driver, dependencies, debugging , cross browser testing, assertions, action unlike in SELENIUM where everything has to be gathered first to make a framework - ALL IN ONE
2. It is faster as here a webdriver does not have to interact with the application(web-server) but both - scripts & browser are on browser iframe which interacts with node js websocket - execution saves time.
3. Installation saves time.
4. selenium has external testreports, snapshots, video libraries.
5. selenium does not have auto reloading and debugging.

**ARCHITECTURE** 

1. Selenium: - Language binding JAVA → within→ IDE → browser drivers → act on web application ( a lot of requests )
2. Cypress:- NODe JS PROXY —----> http request /responses ( websocket)----> browser scripts iframe + execution ifarme  ( everything on same machine and no language /OS binding )


**LIMITATION of cypress**
1. only JS or typescript language supported since its a nodejs testing framework
2. no mobile app automation
3. no safari and opera support
4. cannot use more that 1 browser/window/tab at time.
5. cannot use XPATH without an external pluggin.

**ADVANTAGES OF Cypress**
1. fast, reliable beacause direct control on browser.
2. browser iframe( test runner ) operates script in a websocket instead of thorugh a webdriver API
3. multiple OS, multi browsers support without external webdriver
4. test reports, screenshots and videos are inbuild library
5. test libraries - MOCHA and Assertion library - CHAI are inbuilt.
6. open source
7. real time debugging
8. real time reloading( autosave )
9. support MOCHA BDD.
    
**INSTALLATION**
1. Download node based on OS version ( along with path settings )
2. Install any IDE ( along with path settings )
3. Install CYPRESS in project -> npm init
npm install cypress –save –dev
4. install cypree cli tool- npm install cypress -g

**OPEN APP**
  npx cypress open

**MODES of test scripts development**
1. E2E test
2. Component test- used by dev, for unit and integration test.

**add below in config file under e2e**
  testIsolation: false,   

When "testIsolation: true" is set in Cypress configuration, it means that before each test runs, Cypress will completely reset the browser context, effectively isolating each test by clearing the DOM state, cookies, localStorage, and sessionStorage in all domains, ensuring that no test is affected by the state left behind from previous tests; this is considered a best practice for reliable and independent test execution.
  
**TEST CASE FORMAT**
nameOFtest.spec.cy.js

**BUNDLED LIBRARIES OF CYPRESS**

MOCHA- is a testing framework which works in an asynchronous, serialized manner. ALso catched test exceptions/errors. ( describe(), it() )
CHAI- TDD, BDD Assertion library of node js  ( expect, should)

**WRITING TEST CASES**

describe(‘name of sceanario’,() => {

	it(‘name of test case’, () +> {
			//statements
})
})

**IntelliSense and Intelligent code completion** - to see functions and command for chaining

1. Add in js spec file
/// <reference types="Cypress"/>
2. create jsconfig.json at root, add below code in there
   {
   "include":["./node_modules/cypress", "cypress", "cypress/**/*.js"]
   }
   
**WEB ELEMENTS OPERATIONS**

1. launching url

cy.visit('https://www.saucedemo.com/');     

2. get element by class, selector, or jquery

cy.get('[data-test="username"]').type("standard_user");
cy.get('[data-test="password"]').type("secret_sauce");
cy.get('[data-test="login-button"]').click();     

3. Assertions

expect(true).to.equal(false);
cy.title().should('eq',"Swag Labs");

4. we need to use "only" to include test 
it.only('dropdown',() => {

**ERRORS/EXCEPTIONS**
Visiting an untrusted website has been preevnted

**Commands for CLI**

1. headless ( default headless )
npx cypress run -b edge --spec C:\Users\savig\OneDrive\Desktop\Cypress_\cypress\e2e\1-getting-started\SauceDemo.cy.js

2. run all scripts
 .\node_modules\.bin\cypress run  

3. specific suite
 .\node_modules\.bin\cypress run --spec .\cypress\integration\demo.spec.js

4. to open browser test runner from CLI
   npx run cypress:open

5. headed mode
npx cypress run -b edge --headed --spec C:\Users\savig\OneDrive\Desktop\Cypress_\cypress\e2e\1-getting-started\SauceDemo.cy.js

**CONFIG FILE**

 const { defineConfig } = require("cypress");

module.exports = defineConfig({ 
  defaultCommandTimeout: 8000,   //default time set for each element to load
  pageLoadTimeout:10000, 
  e2e: 
  { 
    setupNodeEvents(on, config) 
    { // implement node event listeners here }, 
    // specPattern: 'cypress/integration/examples/*.js', 
    } ,

    //mandatory to load elements and not give white screen after browser vi
    testIsolation: false,   
 }

});

**stop auto-rerun for test**
why it is needed - when we changed even one line, the whole script reloads and run all instructions, all tests again, this causes much delay in debugging.
we have to add in- in config file under e2e

watchForFileChanges: false

**stop XHR and FETCH logs while running the script** in support folder- e2e js file

const app=window.top;
if(!app.document.head.querySelector("[data-hide-command-log-request]")){
const style = app.document.createElement("style");
style.innerHTML=".command-namerequest, .command-name-xhr { dispaly:none }";
style.setAttribute("data-hide-command-log-request","");
app.document.head.appendChild(style);
}

**Extension**

Cypress Extension for vs code

**Xpath plugin**
1. install - npm install -D cypress-xpath
2. Add: require('cypress-xpath')         - in e2e js file
3. Start using in scripts : cy.xpath('locator')



QUERYING
Get
Contains
Within
Root
.get or .find
Pseudo class character

TRAVERSAL
Children
Closest
Eq
Filter
Find
First
Last
Next
nextAll
nextUntil
Not
Parent
Parents
parentsUntil
Prev
prevAll


