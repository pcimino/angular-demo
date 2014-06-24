angular.module('ControllerModule').controller('404Controller',
  function ($scope) {
  'use strict';
    var threshhold = Math.floor(Math.random()*4)+1;
    $scope.a404Data = {
      'altText':'',
      'height':'',
      'width':'',
      'imageName' :''
    };
    if (threshhold === 1) {
      $scope.a404Data.altText =  'Corgi going nowhere fast.';
      $scope.a404Data.height = '205';
      $scope.a404Data.width = '390';
      $scope.a404Data.imageName = 'giphy.gif';
    } else if (threshhold === 2) {
      $scope.a404Data.altText =  'Squirrel in a hurry.';
      $scope.a404Data.height = '241';
      $scope.a404Data.width = '322';
      $scope.a404Data.imageName = 'squirrel-launcher-slingshot.gif';
    } else if (threshhold === 3) {
      $scope.a404Data.altText =  'Soon.';
      $scope.a404Data.height = '322';
      $scope.a404Data.width = '241';
      $scope.a404Data.imageName = 'vulture_1.jpg';
    } else {
      $scope.a404Data.altText =  'Outta here.';
      $scope.a404Data.height = '363';
      $scope.a404Data.width = '409';
      $scope.a404Data.imageName = 'vulture_2.jpg';
    }
  }
);

