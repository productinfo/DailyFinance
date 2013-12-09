'use strict';

describe('Controller: LoginCtrl', function () {
  var scope, mockBackend, controller, modalFactory, $AuthenticationService = {
    login: function () {
      return {
        success: function () {}
      }
    }
  };

  beforeEach(module('DailyFinanceApp'));

  beforeEach(function () {
    module('ngResource', function ($provide) {
      $provide.factory('$modalFactory', app$$modalFactory);
      $provide.value('AuthenticationService', $AuthenticationService);
    });
  });

  beforeEach(inject(function ($rootScope, $controller, $httpBackend, $routeParams, $modalFactory, AuthenticationService) {
    mockBackend = $httpBackend;
    controller = $controller;
    modalFactory = $modalFactory;
    scope = $rootScope.$new();
    controller('LoginCtrl', {
      $scope: scope
    });
  }));

  afterEach(function () {
    mockBackend.verifyNoOutstandingExpectation();
    mockBackend.verifyNoOutstandingRequest();
  });

  xit('login should complete authenticate', function () {
    // TODO
  });

  it('retrievePassword should popup modal ', function () {
    spyOn(modalFactory, 'retrievePasswordModal');
    scope.retrievePassword();
    expect(modalFactory.retrievePasswordModal).toHaveBeenCalled();
  });
});