/*
  Data Structure
  {
    demo:[{id:<number>, value:<string>}]
  }

  Operations
    push : push an element onto the stack
      @arg string
    pop : pop the first element off the stack and return getItem
      @return string

    getStack : retrievse the session storage object

*/
angular.module('ModelModule').service('BindDemoModel',
  function($window, StorageService) {
    'use strict';
    // Push data to the stack
    this.push = function(displayValue) {
      // console.log('bbbb ' + JSON.stringify(StorageService.getEndpointDataStore()));
      var stack = StorageService.getStack();
      try {
        stack.demo.unshift({id:Math.randomdisplayValue, value:displayValue});
        StorageService.setStack(stack);
      } catch (ex) {
        console.log(ex);
        alert('Duplicate key');
      }
    };
    // Pop data off of the stack
    this.pop = function() {
      var stack = StorageService.getStack();
      var displayValue = stack.demo[0];
      stack.demo.shift();
      StorageService.setStack(stack);
      if (displayValue) {
        return displayValue.value;
      }
      return '';
    };

    // get stack
    this.getStack = function() {
      return StorageService.getStack();
    };
});

