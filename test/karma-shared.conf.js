/* Mostly from the angular.js project */

/* browserList is an array of browsers to test, currently available:
 - Chrome
 - ChromeCanary
 - Firefox
 - Opera
 - Safari (only Mac)
 - PhantomJS
 - IE (only Windows)
 */

module.exports = function(config, specificOptions, browserList) {
  config.set({
    // base path, that will be used to resolve files and exclude
    basePath : '../',
    // testing framework to use (jasmine/mocha/qunit/...)
    frameworks: ['jasmine'],
    files : [
             'bower_components/jquery/jquery.js',
             'bower_components/angular/angular.js',
             'bower_components/angular-animate/angular-animate.js',
             'bower_components/angular-resource/angular-resource.js',
             'bower_components/angular-cookies/angular-cookies.js',
             'bower_components/angular-sanitize/angular-sanitize.js',
             'bower_components/angular-route/angular-route.js',
             'bower_components/angular-mocks/angular-mocks.js',
             'src/demoApp.js',
             'src/**/*.js',
             'test/jasmine/**/*.js'
           ],
    logColors: true,
    browsers: browserList,
    browserDisconnectTimeout: 10000,
    browserDisconnectTolerance: 2,
    browserNoActivityTimeout: 20000,

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true,
    autoWatch: false, // using grunt to watch and rerun

    // web server port
    port: 9876,

    // list of files / patterns to exclude
    exclude: [],

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // JS unit testing coverage
    preprocessors : {
        '**[!bower_components]*/*[!.spec].js': 'coverage'
    },
    reporters : ['coverage'],
    coverageReporter : {
        type: 'text'
        //type: 'html',
        //dir: '../coverage/'
    },


  });


  // logger
  loggers = [{type: 'console'}];

};
