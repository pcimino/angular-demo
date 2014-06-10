/*jshint globalstrict: true*/
'use strict';

describe('Testing the HistoryController', function() {
    // define variables in scope for this test suite
    var $rootScope, $controller, $location;
    var $http, $httpBackend;
    var $routeParams;
    var mockScope;


    // modules used in this test suite
    var testController, accountModel, storageService;

    // will be run before each it() function
    beforeEach(function() {
        module('ControllerModule');
        module('ModelModule');
        module('DemoServiceModule');
        module('ngRoute');
    });

    // Create mocks and setup controller, data
    beforeEach(inject(function($injector) {
        $rootScope = $injector.get('$rootScope');

        // route $routeParams
        $routeParams = $injector.get('$routeParams');

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
        accountModel = $injector.get('AccountModel', {StorageService:storageService});
		var dummyAcct = {accountNumber:3, accountType:'save', accountNickname:'nick', accountBalance:'22.34', transactions:[{date:new Date(), fromAccountName:'from', toAccountName:'to', fromAccountNumber:'234', toAccountNumber:'567', amount:'1'}]};
		accountModel.getAccount = jasmine.createSpy("getAccount() spy").andReturn(dummyAcct);
		
        // build an instance of the controller
        testController = $controller('HistoryController', {
          $scope:mockScope, $location:$location, $routeParams:$routeParams, AccountModel:accountModel
        });
    }));

    // verify controller created
    it('should be able to create the controller', inject(function($rootScope, $controller) {
        expect(testController).toBeDefined();
    }));



});
