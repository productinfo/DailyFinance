'use strict';

describe('Directive: navbar', function () {
  var scope, mockBackend, html, elem, data = [{}];
  beforeEach(module('DailyFinanceApp'));
  beforeEach(module('views/directives/navbar.html'));
  beforeEach(inject(function ($rootScope, $httpBackend, $compile) {
    mockBackend = $httpBackend;
    html = '<navbar no-data="data.length === 0"></navbar>';
    scope = $rootScope.$new();
    elem = $compile(angular.element(html))(scope);
    scope.$digest();
  }));
});
