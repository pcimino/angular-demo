
angular.module('ControllerModule').controller('TransfersController',
  function ($scope, $location, $routeParams, AccountModel) {
    'use strict';
    var accounts = AccountModel.getAccounts();
    $scope.accounts = accounts;
    $scope.transferData = { "accounts":accounts };
    $scope.transfer = function() {
      if ($scope.transferData.fromAccount && $scope.transferData.toAccount && $scope.transferData.transferAmount) {
        AccountModel.transferMoney($scope.transferData.fromAccount, $scope.transferData.toAccount, $scope.transferData.transferAmount);
      }
      $scope.activeMenuTab = 'home';
      $location.path('/');
    };
  }
);

