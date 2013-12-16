'use strict';

describe('Controller: SignUpCtrl', function () {
  var scope, mockBackend, controller, modalFactory, location = {
    path: function () {}
  };

  beforeEach(module('DailyFinanceApp'));

  beforeEach(function () {
    module('ngResource', function ($provide) {
      $provide.factory('$modalFactory', app$modalFactory);
    });
  });

  beforeEach(inject(function ($rootScope, $controller, $httpBackend, $routeParams, $modalFactory) {
    mockBackend = $httpBackend;
    controller = $controller;
    modalFactory = $modalFactory;
    scope = $rootScope.$new();
    controller('SignUpCtrl', {
      $scope: scope,
      $location: location
    });
  }));

  afterEach(function () {
    mockBackend.verifyNoOutstandingExpectation();
    mockBackend.verifyNoOutstandingRequest();
  });

  it('back fn should redirect to login', function () {
    spyOn(location, 'path');
    scope.back();
    expect(location.path).toHaveBeenCalled();
  });

  it('show fn should update message', function () {
    scope.show('Leo');
    expect(scope.flash).toBe('Leo');
  });

  it('successful getting account', function () {
    spyOn(modalFactory, 'success');
    scope.profile = {
      name: 'Leo',
      email: 'leo@email.com',
      password: '123456789',
      confirmPassword: '123456789'
    };
    scope.signup();
    mockBackend.expectPOST('/api/account').respond(200);
    mockBackend.flush();
    expect(modalFactory.success).toHaveBeenCalled();
  });

  it('error case to get account', function () {
    spyOn(modalFactory, 'error');
    scope.profile = {
      name: 'Leo',
      email: 'leo@email.com',
      password: '123456789',
      confirmPassword: '123456789'
    };
    scope.signup();
    mockBackend.expectPOST('/api/account').respond(400);
    mockBackend.flush();
    expect(modalFactory.error).toHaveBeenCalled();
  });

  it('miss name', function () {
    scope.signup();
    expect(scope.flash).toBe('Name cannot be empty!');
  });

  it('miss email', function () {
    scope.profile = {
      name: 'Leo'
    };
    scope.signup();
    expect(scope.flash).toBe('Email cannot be empty!');
  });

  it('miss password', function () {
    scope.profile = {
      name: 'Leo',
      email: 'leo@email.com'
    };
    scope.signup();
    expect(scope.flash).toBe('Password cannot be empty!');
  });

  it('miss confirmPassword', function () {
    scope.profile = {
      name: 'Leo',
      email: 'leo@email.com',
      password: '123456789'
    };
    scope.signup();
    expect(scope.flash).toBe('Please enter password again!');
  });

  it('password too short', function () {
    scope.profile = {
      name: 'Leo',
      email: 'leo@email.com',
      password: '12345',
      confirmPassword: '12345'
    };
    scope.signup();
    expect(scope.flash).toBe('Password is too short!');
  });

  it('password too short', function () {
    scope.profile = {
      name: 'Leo',
      email: 'leo@email.com',
      password: '123456789',
      confirmPassword: '987654321'
    };
    scope.signup();
    expect(scope.flash).toBe('Password is not matched!');
  });
});