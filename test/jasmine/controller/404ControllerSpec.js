/*jshint globalstrict: true*/
'use strict';

describe('Testing the 404Controller', function() {
    // define variables in scope for this test suite
    var $rootScope, $controller, $location, $http, $httpBackend;
    var mockScope;


    // modules used in this test suite
    var testController;

    // will be run before each it() function
    beforeEach(function() {
        module('ControllerModule');
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

        // build an instance of the controller
        testController = $controller('404Controller', {
            $scope:mockScope
        });
    }));

    // verify controller created
    it('should be able to create the controller', inject(function($rootScope) {
        expect(testController).toBeDefined();
    }));


});
