const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
require('cypress-terminal-report/src/installLogsPrinter')(on, {printLogsToConsole: 'always'})    },
    baseUrl: 'https://roomy-fire-houseboat.glitch.me/',
    testIsolation: true,
    sideEffects: true,
    screenshotOnRunFailure: false,
    
  },
});
