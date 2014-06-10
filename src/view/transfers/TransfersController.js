
angular.module('ControllerModule').controller('TransfersController',
  function ($scope, $location, $routeParams, AccountModel) {
    'use strict';
    var accounts = AccountModel.getAccounts();
    $scope.accounts = accounts;
    $scope.transfer = function() {
      if ($scope.fromAccount && $scope.toAccount && $scope.transferAmount) {
        AccountModel.transferMoney($scope.fromAccount, $scope.toAccount, $scope.transferAmount);
      }
      $scope.activeMenuTab = 'home';
      $location.path('/');
    };
  }
);

