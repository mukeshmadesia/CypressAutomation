const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: 'cypress\\e2e_test\\*.js'
  },

  //to access iframe
  chromeWebSecurity: false,

  //retries
  retries: {
    runMode: 1,
    openMode: 1,
  },
  
  //for integrating cypress cloud dashboard
  projectId: "4u3zkz",

  //for recording run from terminal
  //npx cypress run --record --key 45975225-8c53-44da-9711-cc5ed83bb423
});
