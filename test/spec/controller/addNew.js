'use strict';

describe('Controller: addNew', function () {

  var scope, mockBackend, controller,
  location = {
    path: function() {}
  };

  beforeEach(module('DailyFinanceApp'));

  beforeEach(inject(function ($rootScope, $controller, $httpBackend, $compile) {
    mockBackend = $httpBackend;
    controller = $controller;
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
});