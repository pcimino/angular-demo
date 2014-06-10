
angular.module('ControllerModule').controller('BindDemoController',
  function ($scope, $location, $routeParams, BindDemoModel, StorageService) {
    'use strict';
    $scope.stack = BindDemoModel.getStack();
    $scope.push = function() {
      if ($scope.displayValue) {
        BindDemoModel.push($scope.displayValue);
        $scope.displayValue = '';
        $scope.stack = BindDemoModel.getStack();
      }
    };
    $scope.pop = function() {
      $scope.displayValue = BindDemoModel.pop();
      $scope.stack = BindDemoModel.getStack();
    };
  }
);

