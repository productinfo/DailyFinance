'use strict';

describe('Controller: uiModule', function () {
  var scope, mockBackend, controller, modalFactory, modal = {
      close: function (res) {
        return true;
      }
    };

  beforeEach(module('DailyFinanceApp'));

  beforeEach(function () {
    module('ngResource', function ($provide) {
      $provide.factory('$modalFactory', app$$modalFactory);
    });
  });

  beforeEach(inject(function ($rootScope, $controller, $httpBackend, $compile, $modalFactory) {
    mockBackend = $httpBackend;
    controller = $controller;
    modalFactory = $modalFactory;
    scope = $rootScope.$new();
    scope.$$childTail = {}
  }));

  afterEach(function () {
    mockBackend.verifyNoOutstandingExpectation();
    mockBackend.verifyNoOutstandingRequest();
  });

  it('should have called modal.close when calling controller.close', function () {
    spyOn(modal, 'close');
    var model = {
      title: 'a',
      message: 'ello',
      buttons: 'delete'
    };
    controller('MessageBoxCtrl', {
      $scope: scope,
      $modalInstance: modal,
      model: model
    });
    scope.close();
    expect(modal.close).toHaveBeenCalled();
  });

  it('should have called retrievePasswordBoxCtrl.close when calling controller.close', function () {
    spyOn(modal, 'close');
    var model = {
      title: 'a',
      message: 'ello',
      buttons: 'delete'
    };
    scope.$$childTail.email = 'leo@email.com';
    controller('retrievePasswordBoxCtrl', {
      $scope: scope,
      $modalInstance: modal,
      model: model
    });
    scope.close('submit');
    expect(modal.close).toHaveBeenCalled();
  });

  it('should have called retrievePasswordBoxCtrl.close when calling controller.close', function () {
    spyOn(modal, 'close');
    var model = {
      title: 'a',
      message: 'ello',
      buttons: 'delete'
    };
    controller('retrievePasswordBoxCtrl', {
      $scope: scope,
      $modalInstance: modal,
      model: model
    });
    scope.close('ok');
    expect(modal.close).toHaveBeenCalled();
  });
});