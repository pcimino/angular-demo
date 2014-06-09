/*jshint globalstrict: true*/
'use strict';
angular.module('ControllerModule').controller('HistoryController',
  function ($scope, $location, $routeParams, AccountModel) {
    var account = AccountModel.getAccount($routeParams.accountId);
    var transactions = account.transactions;
    $scope.account = account;

    // HACK for the intial deposit
    transactions[0].fromAccountName = 'Initial Deposit';
    transactions[0].toAccountName = account.nickname;

    $scope.transactions = transactions;

    return true;
  }
);

