/*
  Data Structure
  {
    userId:<string:user id>,
    displayName:<string:display name>
  }

  Operations
  getUser: Returns the session user object

*/
angular.module('ModelModule').service('UserModel',
  function() {
    'use strict';
  // get session user
  this.getUser = function() {
    return {userId:'Med01', displayName:'Dr. M.'};
  };
});


