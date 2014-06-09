/*jshint globalstrict: true*/
'use strict';

describe('Testing the BindDemoController', function() {
    // define variables in scope for this test suite
    var $rootScope, $controller, $location;
    var $http, $httpBackend;
    var routeParams;
    var mockScope;


    // modules used in this test suite
    var testController, bindDemoModel, storageService;;

    // will be run before each it() function
    beforeEach(function() {
        module('ControllerModule');
        module('ModelModule');
        module('DemoServiceModule');
        module('ngRoute');
    });

    // Create mocks and setup controller, data
    beforeEach(inject(function($injector) {
        $rootScope = $injector.get('$rootScope', '$routeParams');

        // route $routeParams
        routeParams = $injector.get('$routeParams');

        // used to instantiate controllers
        $controller =  $injector.get('$controller');

        // location service used to handle navigation paths
        $location = $injector.get('$location');

        // handle http requests
        $http = $injector.get('$http');
        $httpBackend = $injector.get('$httpBackend');

        mockScope = $rootScope.$new();

        // instantiate a model and service used by Controller
        bindDemoModel = $injector.get('BindDemoModel');
        storageService = $injector.get('StorageService');

        // build an instance of the controller
        testController = $controller('BindDemoController', {
          $scope:mockScope, $location:$location, $routeParams:routeParams, BindDemoModel:bindDemoModel, StorageService:storageService
        });
    }));

    // verify controller created
    it('should be able to create the controller', inject(function($rootScope, $controller) {
        expect(testController).toBeDefined();
    }));


});
