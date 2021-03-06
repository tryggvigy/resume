exports.config = {
  allScriptsTimeout: 11000,

  specs: [
    'e2e/**/*_e2e.js',
    'e2e/app_e2e.js'
  ],

  capabilities: {
    'browserName': 'chrome',
    'chromeOptions': {
      args: ['--test-type']
    }
  },

  chromeOnly: true,

  baseUrl: 'http://localhost:8080/',


  framework: 'jasmine',

  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  }
};
