'use strict';

describe('Controller: DetailCtrl', function () {

  var scope, mockBackend, controller, location = {
    path: function() {}
  },
  mockExpense = {
    'uesrId': '1234-ABCD-5678-WXYZ',
    'expenseId': 'WXYZ-1234-ABCD-5678',
    'name': 'Leo',
    'price': '999',
    'date': '12/31/2013',
    'time': '01:23 PM'
  };

  beforeEach(module('DailyFinanceApp'));

  beforeEach(inject(function ($rootScope, $controller, $httpBackend, $routeParams) {
    $routeParams.id = 'ABCDEFGHIJK';
    mockBackend = $httpBackend;
    controller = $controller;
    scope = $rootScope.$new();
    controller('DetailCtrl', {
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
    mockBackend.expectGET('/api/expense/ABCDEFGHIJK').respond(200);
    mockBackend.flush();
    expect(scope.contentConfig.legend).toBe('Detail of you expense');
    expect(scope.contentConfig.subTitle).toBe('Click to edit');
    expect(scope.contentConfig.submitButtonTitle).toBe('  Update');
    expect(scope.contentConfig.isDeleteButtonShow).toBe(true);
  });

  it('getData should get the expenses from DB', function () {
    mockBackend.expectGET('/api/expense/ABCDEFGHIJK').respond(mockExpense);
    mockBackend.flush();
    expect(scope.expense).toBeDefined();
    expect(scope.expense.uesrId).toBe('1234-ABCD-5678-WXYZ');
  });

  // iit('delete should send DELETE req', function () {
  //   mockBackend.expectGET('/api/expense/ABCDEFGHIJK').respond(mockExpense);
  //   mockBackend.flush();
  //   scope.delete();
  //   mockBackend.expectGET('/api/expense/ABCDEFGHIJK').respond(200);
  // });

  // it('submit should send PUT req', function () {
  //   mockBackend.expectGET('/api/expense/ABCDEFGHIJK').respond(mockExpense);
  //   mockBackend.flush();
  // });

});