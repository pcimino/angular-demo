/*
  Simple get calls to a public API and resturns the response

  Prob need more research in to using .then() versus .success() and .error()
*/
angular.module('AjaxModule').factory('AccountSummary',
  function($http, EndpointModel) {
      'use strict';
      // instantiate our initial object
      var SimpleGet = function() {
        var endpoint = EndpointModel.getServer() + ":" + EndpointModel.getPort();
        this.url = 'http://' + endpoint + '/someurl';
      };

      // define the getSearchResults method which will fetch data
      // and *returns* a promise
      SimpleGet.prototype.getSearchResults = function() {

      // Generally, javascript callbacks, like here the $http.get callback,
      // change the value of the "this" variable inside it
      // so we need to keep a reference to the current instance "this" :
      var self = this;

      return $http.get(this.url).then(function(response) {
          console.log(JSON.stringify(response.data.accounts, undefined, 2));
          return response.data.accounts;
      });

    };
    return SimpleGet;

  }
);


