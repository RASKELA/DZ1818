const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://qauto.forstudy.space/',
    setupNodeEvents(on, config) {
      // настройка событий, если нужно
    },
    specPattern: 'cypress/e2e/**/*.cy.js',
  },
  browser: 'firefox',
});
