'use strict';

describe('Controller: MainCtrl', function () {
  var scope, mockBackend, controller, modalFactory, mockExpense = [{
    'uesrId': '1234-ABCD-5678-WXYZ',
    'expenseId': 'WXYZ-1234-ABCD-5678',
    'name': 'Leo',
    'price': 999,
    'date': '12/31/2013',
    'time': '01:23 PM'
  }], mockTotal = [{
    'uesrId': '1234-ABCD-5678-WXYZ',
    'expenseId': 'WXYZ-1234-ABCD-5678',
    'name': 'Leo',
    'price': 999,
    'date': '12/31/2013',
    'time': '01:23 PM'
  }, {
    'uesrId': '1234',
    'expenseId': 'WXYZ',
    'name': 'leoj',
    'price': 1,
    'date': '2/13/2013',
    'time': '11:43 PM'
  }], location = {
    path: function () {}
  };

  beforeEach(module('DailyFinanceApp'));

  beforeEach(function () {
    module('ngResource', function ($provide) {
      $provide.factory('$modalFactory', app$$modalFactory);
    });
  });

  beforeEach(inject(function ($rootScope, $controller, $httpBackend, $routeParams, $modalFactory, AuthenticationService) {
    mockBackend = $httpBackend;
    controller = $controller;
    modalFactory = $modalFactory;
    scope = $rootScope.$new();
    controller('MainCtrl', {
      $scope: scope,
      $location: location,
      $session: {
        get: function() {
          return {
            userId: '123456789'
          }
        }
      }
    });
  }));

  afterEach(function () {
    mockBackend.verifyNoOutstandingExpectation();
    mockBackend.verifyNoOutstandingRequest();
  });

  it('send query req', function () {
    mockBackend.expectGET('/api/expense?userId=123456789').respond(mockExpense);
    mockBackend.flush();
    expect(scope.data).toBeDefined();
  });

  it('error case', function () {
    spyOn(modalFactory, 'error');
    mockBackend.expectGET('/api/expense?userId=123456789').respond(400);
    mockBackend.flush();
    expect(modalFactory.error).toHaveBeenCalled();
  });

  it('addButtonTitle should be defined', function () {
    mockBackend.expectGET('/api/expense?userId=123456789').respond(mockExpense);
    mockBackend.flush();
    expect(scope.addButtonTitle).toBe('  Add New Expense');
  });

  it('addNew should redirect to addNew', function () {
    spyOn(location, 'path');
    mockBackend.expectGET('/api/expense?userId=123456789').respond(mockExpense);
    mockBackend.flush();
    scope.addNew();
    expect(location.path).toHaveBeenCalled();
  });

  it('total should sum up ', function () {
    mockBackend.expectGET('/api/expense?userId=123456789').respond(mockTotal);
    mockBackend.flush();
    expect(scope.total).toBe(1000);
  });
});