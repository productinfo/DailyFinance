'use strict';

describe('Controller: AddNewCtrl', function () {

  var scope, mockBackend, controller, modalFactory,
  location = {
    path: function() {}
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
    controller('AddNewCtrl', {
      $scope: scope,
      $location: location,
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

  it('contentConfig should return default settings', function () {
    expect(scope.contentConfig.legend).toBe('Create New Expense');
    expect(scope.contentConfig.subTitle).toBe('Please input details');
    expect(scope.contentConfig.submitButtonTitle).toBe('  Create');
    expect(scope.contentConfig.isDeleteButtonShow).toBe(false);
  });

  it('create should send the POST req', function () {
    spyOn(location, 'path');
    scope.expense = 100;
    scope.submit();
    mockBackend.expectPOST('/api/expense').respond(200);
    mockBackend.flush();
    expect(location.path).toHaveBeenCalled();
  });

  it('error case on sending the POST req', function () {
    spyOn(modalFactory, 'error');
    scope.expense = 100;
    scope.submit();
    mockBackend.expectPOST('/api/expense').respond(400);
    mockBackend.flush();
    expect(modalFactory.error).toHaveBeenCalled();
  });
});