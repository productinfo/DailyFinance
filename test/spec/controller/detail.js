'use strict';

describe('Controller: DetailCtrl', function () {

  var scope, mockBackend, controller, modalFactory, location = {
    search: function() {
      return {
        path: function() {}
      }
    },
    path: function () {}
  },
  mockExpense = {
    'uesrId': '1234-ABCD-5678-WXYZ',
    'expenseId': 'WXYZ-1234-ABCD-5678',
    'name': 'Leo',
    'price': 999,
    'date': '12/31/2013',
    'time': '01:23 PM'
  };

  beforeEach(module('DailyFinanceApp'));

  beforeEach(function () {
    module('ngResource', function ($provide) {
      $provide.factory('$modalFactory', app$modalFactory);
    });
  });

  beforeEach(inject(function ($rootScope, $controller, $httpBackend, $routeParams, $modalFactory) {
    $routeParams.id = 'ABCDEFGHIJK';
    mockBackend = $httpBackend;
    controller = $controller;
    modalFactory = $modalFactory;
    scope = $rootScope.$new();
    controller('DetailCtrl', {
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

  it('callDeleteAPI should send delete req', function () {
    spyOn(location, 'path');
    mockBackend.expectGET('/api/expense/ABCDEFGHIJK').respond(200);
    mockBackend.flush();
    scope.callDeleteAPI();
    mockBackend.expectDELETE('/api/expense/ABCDEFGHIJK?userId=123456789').respond(200);
    mockBackend.flush();
    expect(location.path).toHaveBeenCalled();
  });

  it('error case on callDeleteAPI', function () {
    spyOn(modalFactory, 'error');
    mockBackend.expectGET('/api/expense/ABCDEFGHIJK').respond(200);
    mockBackend.flush();
    scope.callDeleteAPI();
    mockBackend.expectDELETE('/api/expense/ABCDEFGHIJK?userId=123456789').respond(400);
    mockBackend.flush();
    expect(modalFactory.error).toHaveBeenCalled();
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

  it('error case for getData', function () {
    spyOn(modalFactory, 'error');
    mockBackend.expectGET('/api/expense/ABCDEFGHIJK').respond(400);
    mockBackend.flush();
    expect(modalFactory.error).toHaveBeenCalled();
  });

  it('delete should pop up modal to ask whether to delete or not', function () {
    spyOn(modalFactory, 'confirmModal');
    mockBackend.expectGET('/api/expense/ABCDEFGHIJK').respond(mockExpense);
    mockBackend.flush();
    scope.delete();
    expect(modalFactory.confirmModal).toHaveBeenCalled();
  });

  xit('submit should send PUT req', function () {
    spyOn(location.search(), 'path');
    mockBackend.expectGET('/api/expense/ABCDEFGHIJK').respond(mockExpense);
    mockBackend.flush();
    scope.submit();
    mockBackend.expectPUT('/api/expense/ABCDEFGHIJK').respond(200);
    mockBackend.flush();
    expect(location.search().path).toHaveBeenCalled();
  });

  it('error case for submit', function () {
    spyOn(modalFactory, 'error');
    mockBackend.expectGET('/api/expense/ABCDEFGHIJK').respond(mockExpense);
    mockBackend.flush();
    scope.submit();
    mockBackend.expectPUT('/api/expense/ABCDEFGHIJK').respond(400);
    mockBackend.flush();
    expect(modalFactory.error).toHaveBeenCalled();
  });
});