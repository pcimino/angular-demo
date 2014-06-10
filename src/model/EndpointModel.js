/*
  Endpoint Structure
  {
    server:<string>,
    port:<string>
  }

  Operations
    getEndpoint : get the current endpoint
      @arg string
    setServer : set the current server endpoint
      @arg string
    setPort : set the port server endpoint
      @arg string
    getServer : get the server endpoint
      @return string
    getPort : get the port endpoint
      @return string

*/
angular.module('ModelModule').service('EndpointModel',
  function($window, StorageService) {
    'use strict';
    // Get the current endpoint
    this.getEndpoint = function() {
      var server = this.getServer();
      var port = this.getPort();
      return server + ":" + port;
    };
    // Get the current server
    this.getServer = function() {
      return StorageService.getEndpointDataStore().server;
    };
    // Get the current port
    this.getPort = function() {
      return StorageService.getEndpointDataStore().port;
    };
    // Set the server
    this.setServer = function(server) {
      var endpoint = StorageService.getEndpointDataStore();
      endpoint.server = server;
      StorageService.setEndpointDataStore(endpoint);
    };
    // Set the port
    this.setPort = function(port) {
      var endpoint = StorageService.getEndpointDataStore();
      endpoint.port = port;
      StorageService.setEndpointDataStore(endpoint);
    };
});

