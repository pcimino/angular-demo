/*
  Utility service for getting/setting session storage

  Operations

    getAccounts : retrieves the array of account objects form session storage
      @param
    setAccounts : Stores an array of account objects in session stlorage
      @arg accounts

    getEndpointDataStore : Returns object
      @return {server:<string>, port:<string>}

    setEndpointDataStore : Save the endpoint
      @param {server:<string>, port:<string>}

    getStack : Returns the stack data store
      @return { demo:[{id:<number>, value:<string>}] }

    setStack : Saves data to the stack
      @param { demo:[{id:<number>, value:<string>}] }

*/
angular.module('DemoServiceModule').service('StorageService',
  function($window) {
    'use strict';
    // get all accounts
    this.getAccounts = function() {
      var accounts = JSON.parse($window.sessionStorage.getItem('demoAccounts'));
      if (null === accounts) {
        accounts = {list:[]};
        this.setAccounts(accounts);
      }
      return accounts;
    };
    // store account info
    this.setAccounts = function(accounts) {
      $window.sessionStorage.setItem('demoAccounts', JSON.stringify(accounts));
    };

    // Get the current endpoint store
    this.getEndpointDataStore = function() {
      var endpoint =  JSON.parse($window.sessionStorage.getItem('demoEndpoint'));
      if (null === endpoint) {
        endpoint = {server:'localhost', port:'9090'};
        this.setEndpointDataStore(endpoint);
      }
      return endpoint;
    };
    // Set the current endpoint store
    this.setEndpointDataStore = function(endpoint) {
      $window.sessionStorage.setItem('demoEndpoint', JSON.stringify(endpoint));
    };

    // get stack
    this.getStack = function() {
      var stack = {demo:[]};
      try {
        stack = JSON.parse($window.sessionStorage.getItem('demoDemoStack'));
        if (null === stack || null === stack.demo) {
          stack = {demo:[]};
          this.setStack(stack);
        }
      } catch (ex) {
        console.log(ex);
        this.setStack(stack);
      }
      return stack;
    };
    // set stack
    this.setStack = function(stack) {
      $window.sessionStorage.setItem('demoDemoStack', JSON.stringify(stack));
    };
  }
);

