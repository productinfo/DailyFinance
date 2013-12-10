'use strict';

describe('Controller: NavbarCtrl', function () {

  var scope, mockBackend, controller, modalFactory,
  route = {
    reload: function() {}
  };

  beforeEach(module('DailyFinanceApp'));

  beforeEach(function () {
    module('ngResource', function ($provide) {
      $provide.factory('$modalFactory', app$$modalFactory);
    });
  });

  beforeEach(inject(function ($rootScope, $controller, $httpBackend, $compile, $modalFactory) {
    mockBackend = $httpBackend;
    controller = $controller;
    modalFactory = $modalFactory;
    scope = $rootScope.$new();
    controller('NavbarCtrl', {
      $scope: scope,
      $route: route,
      $session: {
        get: function() {
          return {
            uesrId: '123456789'
          }
        }
      }
    });
  }));

  afterEach(function () {
    mockBackend.verifyNoOutstandingExpectation();
    mockBackend.verifyNoOutstandingRequest();
  });

  it('deleteAll should popup modal', function () {
    spyOn(modalFactory, 'deleteAllModal');
    scope.deleteAll();
    expect(modalFactory.deleteAllModal).toHaveBeenCalled();
  });
});