/*jshint globalstrict: true*/
'use strict';
angular.module('ControllerModule').controller('404Controller',
  function ($scope) {
    var threshhold = Math.floor(Math.random()*4)+1;
    if (threshhold === 1) {
      $scope.altText =  'Corgi going nowhere fast.';
      $scope.height = '205';
      $scope.width = '390';
      $scope.imageName = 'giphy.gif';
    } else if (threshhold === 2) {
      $scope.altText =  'Squirrel in a hurry.';
      $scope.height = '241';
      $scope.width = '322';
      $scope.imageName = 'squirrel-launcher-slingshot.gif';
    } else if (threshhold === 3) {
      $scope.altText =  'Soon.';
      $scope.height = '322';
      $scope.width = '241';
      $scope.imageName = 'vulture_1.jpg';
    } else {
      $scope.altText =  'Outta here.';
      $scope.height = '363';
      $scope.width = '409';
      $scope.imageName = 'vulture_2.jpg';
    }
  }
);

