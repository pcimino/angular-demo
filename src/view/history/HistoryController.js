
angular.module('ControllerModule').controller('HistoryController',
  function ($scope, $location, $routeParams, AccountModel) {
      'use strict';
    var account = AccountModel.getAccount($routeParams.accountId);
    var transactions = account.transactions;

    $scope.historyData = {
      'account': account,
      'transactions': account.transactions
    }

    // HACK for the intial deposit
    $scope.historyData.transactions[0].fromAccountName = 'Initial Deposit';
    $scope.historyData.transactions[0].toAccountName = account.nickname;

    
    return true;
  }
);

