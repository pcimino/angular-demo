/*jshint globalstrict: true*/
'use strict';

describe('Testing the NavigationController', function() {
    // define variables in scope for this test suite
    var $rootScope, $controller, $location;
    var $http, $httpBackend;
    var $routeParams;
    var mockScope;


    // modules used in this test suite
    var testController, userModel, navigationModel;

    // will be run before each it() function
    beforeEach(function() {
        module('ControllerModule');
        module('ModelModule');
    });

    // Create mocks and setup controller, data
    beforeEach(inject(function($injector) {
        $rootScope = $injector.get('$rootScope');

        // used to instantiate controllers
        $controller =  $injector.get('$controller');

        // location service used to handle navigation paths
        $location = $injector.get('$location');

        // handle http requests
        $http = $injector.get('$http');
        $httpBackend = $injector.get('$httpBackend');

        mockScope = $rootScope.$new();

        // instantiate models used by Controller
        userModel = $injector.get('UserModel');
        navigationModel = $injector.get('NavigationModel');

        // build an instance of the controller
        testController = $controller('NavigationController', {
          $scope:mockScope, UserModel:userModel, NavigationModel:navigationModel
        });
    }));

    // verify controller created
    it('should be able to create the controller', inject(function($rootScope, $controller) {
        expect(testController).toBeDefined();
    }));



});
