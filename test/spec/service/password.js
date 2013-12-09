'use strict';

describe('Services: passsword', function () {
  var mockBackend, password;

  beforeEach(module('DailyFinanceApp'));

  beforeEach(inject(function ($injector) {
    password = $injector.get('$password');
    mockBackend = $injector.get('$httpBackend');
  }));

  afterEach(function () {
    mockBackend.verifyNoOutstandingExpectation();
    mockBackend.verifyNoOutstandingRequest();
  });

  it('retrievePassword should send POST req', function () {
    var counter = 0;
    mockBackend.expectPOST('/api/password').respond(200);
    password.retrievePassword({}, {
      email: 'leo@email.com'
    }).$promise.then(function () {
      counter += 1;
    });
    mockBackend.flush();
    expect(counter).toBe(1);
  });
});