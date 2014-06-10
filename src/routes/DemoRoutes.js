angular.module('DemoRoutes', []).config(['$routeProvider', function($routeProvider) {
    'use strict';
  $routeProvider
    .when('/', {
      controller: 'HomeController',
      templateUrl: 'view/home/home.html'
    })
    .when('/transfers', {
      controller: 'TransfersController',
      templateUrl: 'view/transfers/transfers.html'
    })
    .when('/history/:accountId', {
      controller: 'HistoryController',
      templateUrl: 'view/history/history.html'
    })
    .when('/about', {
      controller: 'AboutController',
      templateUrl: 'view/about/about.html'
    })
    .when('/navigation', {
      controller: 'NavigationController',
      templateUrl: 'view/navigation/navigation.html'
    })
    .when('/test', {
      controller: 'TestController',
      templateUrl: 'view/test/test.html'
    })
    .when('/bind', {
      controller: 'BindDemoController',
      templateUrl: 'view/bind/bind.html'
    })
    .when('/ajax', {
      controller: 'AjaxDemoController',
      templateUrl: 'view/ajax/ajax.html'
    })
    .otherwise({
      controller: '404Controller',
      templateUrl: 'view/404/404.html'
    });
}]);

