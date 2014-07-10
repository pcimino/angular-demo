/*
  Simple get calls to a public API and resturns the response

  Prob need more research in to using .then() versus .success() and .error()
*/
angular.module('AjaxModule').factory('SearchWeather',
  function($http, EndpointModel) {
    'use strict';
    // Not needed here, just showing how to retrieve an endpoint back to the App Server
    var endpoint = EndpointModel.getServer() + ":" + EndpointModel.getPort();

    var url = 'http://api.openweathermap.org/data/2.5/weather?q=';

    // instantiate our initial object
    var SimpleGet = function(city, state) {
      this.weatherUrl = url + city + ',' + state;
    };

    // define the getSearchResults method which will fetch data
    // and *returns* a promise
    SimpleGet.prototype.getSearchResults = function() {

      // Generally, javascript callbacks, like here the $http.get callback,
      // change the value of the "this" variable inside it
      // so we need to keep a reference to the current instance "this" :
      var self = this;

      return $http.get(this.weatherUrl).then(function(response) {
        return response;
      });

      /* Alternate way

        return $http({method: 'GET', url: this.weatherUrl}).
          success(function(data, status, headers, config) {
            return data;
          }).
          error(function(data, status, headers, config) {
            console.log(status);
          });


      */
    };
    return SimpleGet;

  }
);


