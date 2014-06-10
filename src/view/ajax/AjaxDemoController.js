
angular.module('ControllerModule').controller('AjaxDemoController',
  function ($scope, EndpointModel, SearchWeather) {
    'use strict';
    $scope.server = EndpointModel.getServer();
    $scope.port = EndpointModel.getPort();
    $scope.city = 'Wilmington';
    $scope.state = 'DE';

    $scope.updateServer = function() {
      EndpointModel.setServer($scope.server);
      EndpointModel.setPort($scope.port);
    };

    $scope.search = function() {
      var city = $scope.city;
      var state = $scope.state;

      if (null === city || city.trim() === '') {
        city = 'Wilmington';
      }
      if (null === state || state.trim() === '') {
        state = 'DE';
      }

      var searchWeather = new SearchWeather(city, state);
      // fetch data and publish on scope
      searchWeather.getSearchResults().then(function(data) {
        $scope.searchResults = JSON.stringify(data, undefined, 2);
      });

    };
  }
);


