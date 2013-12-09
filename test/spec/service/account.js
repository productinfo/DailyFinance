'use strict';

describe('Services: account', function () {
  var mockBackend, account;

  beforeEach(module('DailyFinanceApp'));

  beforeEach(inject(function ($injector) {
    account = $injector.get('$account');
    mockBackend = $injector.get('$httpBackend');
  }));

  afterEach(function () {
    mockBackend.verifyNoOutstandingExpectation();
    mockBackend.verifyNoOutstandingRequest();
  });

  it('create should send POST req', function () {
    var counter = 0;
    mockBackend.expectPOST('/api/account').respond(200);
    account.create({}, {
      name: 'Leo',
      email: 'leo@email.com',
      password: '123456789'
    }).$promise.then(function () {
      counter += 1;
    });
    mockBackend.flush();
    expect(counter).toBe(1);
  });
});