const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000',
    expose: {
      apiUrl: 'http://localhost:3333'
    },
    viewportwidth: 1920,
    viewportheight: 1080,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
