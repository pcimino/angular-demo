/*jshint globalstrict: true*/
/*global window */
'use strict';
var demoApp = window.demoApp = angular.module('demoApp',
  [
    // Routes
    'ngRoute',
    'ngTouch',
    'ngResource',
    // Routes
    'DemoRoutes',
    // Controllers
    'ControllerModule',
    // Directives
    'DirectiveModule',
    // Models
    'ModelModule',
    // Services
    'DemoServiceModule',
    // Ajax
    'AjaxModule'
  ]
);

// Initial module definition here
angular.module('ControllerModule', []);
angular.module('DirectiveModule', []);
angular.module('ModelModule', []);
angular.module('AjaxModule', ['ngRoute']);
angular.module('DemoServiceModule', []); // ServiceModule is already in use by Angular


