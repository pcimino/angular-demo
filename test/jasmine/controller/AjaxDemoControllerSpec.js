/*jshint globalstrict: true*/
'use strict';

describe('Testing the AjaxDemoController', function() {
    // define variables in scope for this test suite
    var $rootScope, $controller, $location;
    var $http, $httpBackend;
    var $routeParams;
    var mockScope;


    // modules used in this test suite
    var testController, endpointModel, searchWeather, storageService;

    // will be run before each it() function
    beforeEach(function() {
        module('ControllerModule');
        module('ModelModule');
        module('AjaxModule');
        module('DemoServiceModule');
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

        // instantiate a model and service used by Controller
        storageService = $injector.get('StorageService');
        endpointModel = $injector.get('EndpointModel', {StorageService:storageService});
        searchWeather = $injector.get('SearchWeather', {EndpointModel:endpointModel});

        // build an instance of the controller
        testController = $controller('AjaxDemoController', {
          $scope:mockScope, EndpointModel:endpointModel, SearchWeather:searchWeather
        });
    }));

    // verify controller created
    it('should be able to create the controller', inject(function($rootScope, $controller) {
        expect(testController).toBeDefined();
    }));



});
