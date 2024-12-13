**CYPRESS**

It is a NODE js based testing framework which works in an asynchronous manner.
Overcomes all the drawbacks of Selenium and other web automation techniques
It can be utilised in 2 forms - an app and a cloud
It supported by 2 lang- TS, JS

**HOW is CYPRESS different from SELENIUM/cucumber**
It comes fully baked- have integrated libraries of test, reporting, snapshot, video, browser driver, dependencies, debugging , cross browser testing, assertions, action unlike in SELENIUM where everything has to be gathered first to make a framework - ALL IN ONE
It is faster as here a webdriver does not have to interact with the application but both - scripts & browser are on browser iframe which interacts with node js proxy - execution saves time.
Installation set saves time.

**ARCHITECTURE** 

**Selenium: **

Language binding JAVA → within→ IDE → browser drivers → act on web application ( a lot of requests )

**Cypress:
**
NODe JS PROXY —----> http request /responses ( websocket)----> browser scripts iframe + execution ifarme  ( everything on same machine and no language /OS binding )

**INSTALLATION**
Download node based on OS version ( along with path settings )
Install any IDE ( along with path settings )
Install CYPRESS in project -> npm init
npm install cypress –save –dev

**OPEN APP**
  npx cypress open

**MODES of test scripts development**
E2E test
Component test- used by dev, for unit and integration test.


**TEST CASE FORMAT**
nameOFtest.spec.cy.js

**BUNDLED LIBRARIES OF CYPRESS**

MOCHA- is a testing framework which works in an asynchronous, serialized manner. ALso catched test exceptions/errors.
CHAI- TDD, BDD Assertion library of node js

**WRITING TEST CASES**

describe(‘name of sceanario’,() => {

	it(‘name of test case’, () +> {
			//statements
})
})

**WEB ELEMENTS OPERATIONS**

//launching url
cy.visit('https://www.saucedemo.com/')     

//get element by class, selector, or jquery
cy.get('[data-test="username"]').type("standard_user");
cy.get('[data-test="password"]').type("secret_sauce");
cy.get('[data-test="login-button"]').click();     

//Assertions
expect(true).to.equal(false)   //assertion 
cy.title().should('eq',"Swag Labs");


**ERRORS/EXCEPTIONS**
Visiting an untrusted website has been preevnted





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


