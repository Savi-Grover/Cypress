const { defineConfig } = require("cypress");


module.exports = defineConfig({ 
  defaultCommandTimeout: 8000,   //default time set for each element to load
  pageLoadTimeout:10000, 
  //reporter: 'cypress-mochawesome-reporter/register',
  reporter: 'mochawesome',
  reporterOptions: {
    useInlineDiffs: true,
    embeddedScreenshots: true,
    reportDir: 'cypress/results',
    reportFilename: '[name].html',
    overwrite: true,
    html: true,
    json: true,
  },
  e2e: 
  { 
    
    //mandatory to load elements and not give white screen after browser vi
    testIsolation: false,   
    watchForFileChanges: false,
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    }
    }
});


