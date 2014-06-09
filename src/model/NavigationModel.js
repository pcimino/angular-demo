/*jshint globalstrict: true*/
'use strict';
/*
  Data Structure
  [{
    target:<string:target link>,
    display:<string:display name>,
    class:<string: active class>
  }]

  Operations
  getNav: Returns the list of navigation links

*/
angular.module('ModelModule').service('NavigationModel',
  function() {
    'use strict';
  // get navigation links
  this.getNav = function() {
    return [
      {target:'#/', display:'Home', class:'home'},
      {target:'#/transfers', display:'Transfers', class:'transfers'},
      {target:'#/bind', display:'Data Binding', class:'bind'},
      {target:'#/ajax', display:'Ajax', class:'ajax'},
      {target:'#/test', display:'Setup Test Data', class:'test'},
      {target:'#/about', display:'About', class:'about'}
    ];
  };
});

