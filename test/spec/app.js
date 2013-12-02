'use strict';

describe('App bootstrap', function () {

  beforeEach(module('DailyFinanceApp'));

  var scope,
    mockBackend;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($rootScope, $httpBackend) {
    scope = $rootScope;
    mockBackend = $httpBackend;
    $rootScope.$digest();
  }));

  it('TBD', function () {
  });
});