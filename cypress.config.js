const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000',
    expose: {
      apiUrl: 'http://localhost:3333'
    },
    viewportWidth: 1920,
    viewportHeight: 1080,
    // screenshot automático quando um teste falha
    screenshotOnRunFailure: true,
    screenshotsFolder: 'cypress/screenshots',

    // vídeo da execução
    video: true,
    videosFolder: 'cypress/videos',

    // limpa screenshots e vídeos antigos antes de cada execução
    trashAssetsBeforeRuns: true,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
