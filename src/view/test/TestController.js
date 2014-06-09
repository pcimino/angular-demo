/*jshint globalstrict: true*/
'use strict';
angular.module('ControllerModule').controller('TestController',
  function ($scope, $location, AccountModel) {
    'use strict';
    var accounts = AccountModel.getAccounts();
    if (accounts.length === 0) {
      AccountModel.initializeTestData();
      $location.path('/');
    }
    $scope.initializeTestData = function() {
      AccountModel.initializeTestData();
      $location.path('/');
    };
  }
);


