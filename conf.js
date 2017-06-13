// An example configuration file.
exports.config = {
  directConnect: true,

  // Capabilities to be passed to the webdriver instance.
  capabilities:
     {
    'browserName': 'chrome',
},

  onPrepare: function(){
    browser.driver.manage().window().maximize();
  },

  // Framework to use. Jasmine is recommended.
  framework: 'jasmine',

  // Spec patterns are relative to the current working directory when
  // protractor is called.

  suites: {
     login: './e2e/loginE2E.js',
     forgotPass: './e2e/forgotPassE2E.js',
     registration: './e2e/registrationE2E.js'
  },

  // Options to be passed to Jasmine.
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 300000
  }
};
