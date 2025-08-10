const { defineConfig } = require("cypress");

const { configurePlugin } = require('cypress-mongodb');

module.exports = defineConfig({
  env: {
    mongodb: {
      uri: 'mongodb+srv://dba:julio123@livroapi.q9pf6pr.mongodb.net/?retryWrites=true&w=majority&appName=LivroApi',
      database: 'test',
      collection: 'livros'
    }
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
       configurePlugin(on);
    },
  },
});
