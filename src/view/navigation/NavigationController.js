
angular.module('ControllerModule').controller('NavigationController',
  function ($scope, UserModel, NavigationModel) {
    'use strict';
    $scope.user = UserModel.getUser();
    $scope.navigation = NavigationModel.getNav();
  }
);

