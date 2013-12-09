// Karma configuration

module.exports = function(config) {
  config.set({
    // base path, that will be used to resolve files and exclude
    basePath: '',

    plugins: [
      'karma-jasmine',
      'karma-junit-reporter',
      'karma-phantomjs-launcher',
      'karma-coverage',
      'karma-ng-html2js-preprocessor'
    ],

    frameworks: [
      'jasmine'
    ],

    // list of files / patterns to load in the browser
    files: [
      'client/bower_components/jquery/jquery.js',
      'client/bower_components/sugar/release/sugar-full.development.js',
      'client/bower_components/angular/angular.js',
      'client/bower_components/angular-bootstrap/ui-bootstrap-tpls.js',
      'client/bower_components/angular-route/angular-route.js',
      'client/bower_components/angular-resource/angular-resource.js',
      'client/bower_components/angular-mocks/angular-mocks.js',
      'client/js/*.js',
      'client/js/**/*.js',
      'test/mock/**/*.js',
      'test/spec/**/*.js'
    ],

    // list of files to exclude
    exclude: [],

    // test results reporter to use
    // possible values: dots || progress || growl
    reporters: ['progress', 'junit', 'coverage'],

    junitReporter: {
      outputFile: '.tmp/test-results.xml'
    },

    preprocessors: {
      '**/js/**/*.js': 'coverage',
      'client/views/**/*.html': 'ng-html2js'
    },

    // web server port
    port: 9876,

    // cli runner port
    runnerPort: 9100,

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // level of logging
    // possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
    logLevel: config.LOG_INFO,

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,

    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera
    // - Safari (only Mac)
    // - PhantomJS
    // - IE (only Windows)
    browsers: ['PhantomJS'],

    // If browser does not capture in given timeout [ms], kill it
    captureTimeout: 5000,

    // Continuous Integration mode
    // if true, it capture browsers, run tests and exit
    singleRun: true
  })
};
