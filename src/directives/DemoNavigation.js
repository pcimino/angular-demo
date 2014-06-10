
angular.module('DirectiveModule').directive('demoNavigation', function() {
'use strict';
  return {
    restrict: 'A',
    templateUrl: 'view/navigation/navigation.html',
    scope: {
    },
    controller: function getUser($scope, $location, UserModel, NavigationModel) {
      $scope.user = UserModel.getUser();
      $scope.navigation = NavigationModel.getNav();
      $scope.change = function() {
        console.log($scope.navSelection);
        var nav = JSON.parse($scope.navSelection);
        $scope.activeMenuTab=nav.class;
        $location.path(nav.target.substring(1));
      };
      $scope.menuChange = function(link) {
        var nav = JSON.parse(link);
        $scope.activeMenuTab=nav.class;
        $location.path(nav.target.substring(1));
      };
    }
  };
});



