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
});