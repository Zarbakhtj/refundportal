const { defineConfig } = require("cypress");
const postgreSQL = require('cypress-postgresql');
const pg = require('pg');
//const db = '';
//const dbConfig = require('./cypress.config.js');



module.exports = defineConfig({
  e2e: {
    
    defaultCommandTimeout: 15000,
    pageLoadTimeout: 20000,
    "reporter": "mocha-junit-reporter",
    "reporterOptions": {
      "mochaFile": "cypress/reports/junit/test-results.[hash].xml",
      "testsuitesTitle": false,
      "responseTimeout":300000,
      experimentalSessionAndOrigin: true,
      failOnStatusCode: false
      
      
      
      
    },
    viewportHeight: 720,
    viewportWidth: 1280,
    waitForAnimations: true,
    watchForFileChanges: false,
    chromeWebSecurity: false,
    projectId: "iyc1yf",


    setupNodeEvents(on, config) {
      // implement node event listeners here
      
      const pool = new pg.Pool(config.db);
      tasks = postgreSQL.loadDBPlugin( pool );
      on('task', tasks);
     

     

    },
    specPattern: 'cypress/integration/specs/allSpecs.js',
    "supportFile": "./cypress/support/commands.js",

    db: {
      user: "postgres",
      password: "password",
      host: "localhost",
      port: "5432",
      database: "site"
  },

  env: {

    url: "http://localhost:4005/management-portal/auth/sign-in",
    apiURL: "http://localhost:8080/GatewayWebapp/data"

  }


    

  },


});

{


  "watchforFileChanges"; true
}





