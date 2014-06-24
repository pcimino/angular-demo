
angular.module('ControllerModule').controller('BindDemoController',
  function ($scope, $location, $routeParams, BindDemoModel, StorageService) {
    'use strict';
    $scope.stackData = {
      'stack': BindDemoModel.getStack()
    }

    $scope.push = function() {
      if ($scope.stackData.displayValue) {
        BindDemoModel.push($scope.stackData.displayValue);
        $scope.stackData.displayValue = '';
        $scope.stackData.stack = BindDemoModel.getStack();
      }
    };
    $scope.pop = function() {
      $scope.stackData.displayValue = BindDemoModel.pop();
      $scope.stackData.stack = BindDemoModel.getStack();
    };
  }
);

