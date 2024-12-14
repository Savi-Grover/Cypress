const { defineConfig } = require("cypress");


module.exports = defineConfig({ 
  defaultCommandTimeout: 8000,   //default time set for each element to load
  pageLoadTimeout:10000, 
  //reporter:'cypress-mochawesome-reporter/register'
  reporter: 'cypress-mochawesome-reporter/register',

  e2e: 
  { 
    setupNodeEvents(on, config) 
    { // implement node event listeners here }, 
    // specPattern: 'cypress/integration/examples/*.js', 
    } ,

    //mandatory to load elements and not give white screen after browser vi
    testIsolation: false,   
    watchForFileChanges: false
    
    }

});


