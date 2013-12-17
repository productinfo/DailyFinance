'use strict';

describe('Controller: LoginCtrl', function () {
  var scope, mockBackend, controller, modalFactory, location = {
    path: function () {}
  };

  beforeEach(module('DailyFinanceApp'));

  beforeEach(function () {
    module('ngResource', function ($provide) {
      $provide.factory('$modalFactory', app$modalFactory);
    });
  });

  beforeEach(inject(function ($rootScope, $controller, $httpBackend, $routeParams, $modalFactory) {
    mockBackend = $httpBackend;
    controller = $controller;
    modalFactory = $modalFactory;
    scope = $rootScope.$new();
    controller('LoginCtrl', {
      $scope: scope,
      $location: location
    });
  }));

  afterEach(function () {
    mockBackend.verifyNoOutstandingExpectation();
    mockBackend.verifyNoOutstandingRequest();
  });

  it('login should complete authenticate', function () {
    spyOn(location, 'path');
    scope.login();
    mockBackend.expectPOST('/login').respond(200);
    mockBackend.flush();
    expect(location.path).toHaveBeenCalled();
  });

  it('retrievePassword should popup modal ', function () {
    spyOn(modalFactory, 'retrievePasswordModal');
    scope.retrievePassword();
    expect(modalFactory.retrievePasswordModal).toHaveBeenCalled();
  });

  it('callRetrievePasswordAPI should popup success modal', function () {
    spyOn(modalFactory, 'success');
    scope.callRetrievePasswordAPI();
    mockBackend.expectPOST('/api/password').respond(200);
    mockBackend.flush();
    expect(modalFactory.success).toHaveBeenCalled();
  });

  it('should popup error modal if email is not found', function () {
    spyOn(modalFactory, 'error');
    scope.callRetrievePasswordAPI();
    mockBackend.expectPOST('/api/password').respond(404);
    mockBackend.flush();
    expect(modalFactory.error).toHaveBeenCalled();
  });

  it('should popup error modal if there is an error', function () {
    spyOn(modalFactory, 'error');
    scope.callRetrievePasswordAPI();
    mockBackend.expectPOST('/api/password').respond(500);
    mockBackend.flush();
    expect(modalFactory.error).toHaveBeenCalled();
  });

});