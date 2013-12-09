'use strict';

describe('Services: api', function () {
  var mockBackend, api, mockExpense = {
    'uesrId': '1234-ABCD-5678-WXYZ',
    'expenseId': 'WXYZ-1234-ABCD-5678',
    'name': 'Leo',
    'price': '999',
    'date': '12/31/2013',
    'time': '01:23 PM'
  }, mockExpenseList = [{
    'uesrId': '1234-ABCD-5678-WXYZ',
    'expenseId': 'WXYZ-1234-ABCD-5678',
    'name': 'Leo',
    'price': '999',
    'date': '12/31/2013',
    'time': '01:23 PM'
  }, {
    'uesrId': '1234-WXYZ-ABCD-5678',
    'expenseId': 'ABCD-5678-WXYZ-1234',
    'name': 'Andy',
    'price': '123',
    'date': '11/30/2013',
    'time': '02:44 PM'
  }];

  beforeEach(module('DailyFinanceApp'));

  beforeEach(inject(function ($injector) {
    api = $injector.get('$api');
    mockBackend = $injector.get('$httpBackend');
  }));

  afterEach(function () {
    mockBackend.verifyNoOutstandingExpectation();
    mockBackend.verifyNoOutstandingRequest();
  });

  it('query should get list of data', function () {
    mockBackend.expectGET('/api/expense?userId=1234-ABCD-5678-WXYZ').respond(200, mockExpenseList);
    var mockData;
    api.query({
      userId: '1234-ABCD-5678-WXYZ'
    }).$promise.then(function (data) {
      mockData = data;
    });
    mockBackend.flush();
    expect(mockData.length).toBe(2);
  });

  it('get should get one data', function () {
    mockBackend.expectGET('/api/expense/WXYZ-1234-ABCD-5678').respond(200, mockExpense);
    var mockData;
    api.get({
      expenseId: 'WXYZ-1234-ABCD-5678'
    }).$promise.then(function (data) {
      mockData = data;
    });
    mockBackend.flush();
    expect(mockData).toBeDefined();
  });

  it('create should send POST req', function () {
    var counter = 0;
    mockBackend.expectPOST('/api/expense').respond(200);
    var mockData;
    api.create({
      userId: '1234-ABCD-5678-WXYZ',
      payload: mockExpense
    }).$promise.then(function (data) {
      counter += 1;
    });
    mockBackend.flush();
    expect(counter).toBe(1);
  });

  it('update should send PUT req', function () {
    mockBackend.expectPUT('/api/expense/WXYZ-1234-ABCD-5678').respond(200, {
      name: 'github'
    });
    var mockData;
    api.update({
      expenseId: 'WXYZ-1234-ABCD-5678'
    }, {
      userId: '1234-ABCD-5678-WXYZ',
      name: 'github',
      price: '123',
      date: '01/01/2011',
      time: '1:11 AM'
    }).$promise.then(function (data) {
      expect(data.name).toBe('github');
    });
    mockBackend.flush();
  });

  it('delete should send DELETE req', function () {
    var counter = 1;
    mockBackend.expectDELETE('/api/expense/WXYZ-1234-ABCD-5678?userId=1234-ABCD-5678-WXYZ').respond(200);
    var mockData;
    api.delete({
      expenseId: 'WXYZ-1234-ABCD-5678'
    }, {
      userId: '1234-ABCD-5678-WXYZ',
    }).$promise.then(function (data) {
      counter -= 1;
    });
    mockBackend.flush();
    expect(counter).toBe(0);
  });
});