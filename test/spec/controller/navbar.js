'use strict';

describe('Controller: NavbarCtrl', function () {

  var scope, mockBackend, controller, modalFactory, api, account,
  location = {
    path: function () {}
  },
  route = {
    reload: function() {}
  };

  beforeEach(module('DailyFinanceApp'));

  beforeEach(function () {
    module('ngResource', function ($provide) {
      $provide.factory('$modalFactory', app$modalFactory);
      $provide.factory('$api', app$api);
      $provide.factory('$account', app$account);
    });
  });

  beforeEach(inject(function ($rootScope, $controller, $httpBackend, $compile, $modalFactory, $api, $account) {
    mockBackend = $httpBackend;
    controller = $controller;
    modalFactory = $modalFactory;
    api = $api;
    account = $account;
    scope = $rootScope.$new();
    controller('NavbarCtrl', {
      $scope: scope,
      $route: route,
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

  it('logout should call logout fn', function (done) {
    spyOn(location, 'path');
    scope.logout();
    mockBackend.expectGET('/logout').respond(200);
    mockBackend.flush();
    expect(location.path).toHaveBeenCalled();
  });

  it('callDeleteAccountAPI should send delete req', function () {
    spyOn(modalFactory, 'success');
    scope.callDeleteAccountAPI();
    mockBackend.expectDELETE('/api/account?userId=123456789').respond(200);
    mockBackend.flush();
    expect(modalFactory.success).toHaveBeenCalled();
  });

  it('deleteAccount should popup modal', function () {
    spyOn(modalFactory, 'confirmModal');
    scope.deleteAccount();
    expect(modalFactory.confirmModal).toHaveBeenCalled();
  });

  it('batchDelete should send batchDelete req', function () {
    spyOn(modalFactory, 'success');
    scope.batchDelete();
    mockBackend.expectDELETE('/api/expense?userId=123456789').respond(200);
    mockBackend.flush();
    expect(modalFactory.success).toHaveBeenCalled();
  });

  it('deleteAll should popup modal', function () {
    spyOn(modalFactory, 'confirmModal');
    scope.deleteAll();
    expect(modalFactory.confirmModal).toHaveBeenCalled();
  });

});