/*jshint globalstrict: true*/
'use strict';
var demoApp = window.demoApp = angular.module('demoApp',
  [
    // Routes
    'ngRoute',
    'DemoRoutes',
    // Controllers
    'ControllerModule',
    // Directives
    'DirectiveModule',
    // Models
    'ModelModule',
    // Services
    'DemoServiceModule',
    'ngTouch',
    // Ajax
    'AjaxModule'
  ]
);

// Initial module definition here
angular.module('ControllerModule', []);
angular.module('DirectiveModule', []);
angular.module('ModelModule', []);
angular.module('AjaxModule', []);
angular.module('DemoServiceModule', []); // ServiceModule is already in use by Angular


