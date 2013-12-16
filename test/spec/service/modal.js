'use strict';

describe('Services: modal', function () {

  describe('Generak Test', function () {
    var mockBackend, modalFactory;

    beforeEach(module('DailyFinanceApp'));

    beforeEach(function () {
      module('ngResource', function ($provide) {
        $provide.factory('$modalFactory', app$modalFactory);
      });

      inject(function ($modalFactory, $httpBackend) {
        modalFactory = $modalFactory;
        mockBackend = $httpBackend;
      });
    });

    afterEach(function () {
      mockBackend.verifyNoOutstandingExpectation();
      mockBackend.verifyNoOutstandingRequest();
    });

    it('error should popup modal', function () {
      modalFactory.error();
      mockBackend.expectGET('views/modal/message.html').respond({});
      mockBackend.flush();
    });

    it('success should popup modal', function () {
      modalFactory.success();
      mockBackend.expectGET('views/modal/message.html').respond({});
      mockBackend.flush();
    });
  });

  describe('Retrieve Password Modal', function () {
    var mockBackend, modalFactory;

    beforeEach(function () {
      module('ngResource', function ($provide) {
        var mockModal = $modal({
          type: 'submit'
        });
        $provide.value('$modal', mockModal);
        $provide.factory('$modalFactory', app$modalFactory);
      });

      inject(function ($modalFactory, $httpBackend) {
        modalFactory = $modalFactory;
        mockBackend = $httpBackend;
      });
    });

    afterEach(function () {
      mockBackend.verifyNoOutstandingExpectation();
      mockBackend.verifyNoOutstandingRequest();
    });

    it('click submit should execute callback with email', function () {
      var callback = jasmine.createSpyObj('callback', ['callback']);
      modalFactory.retrievePasswordModal(callback.callback);
      expect(callback.callback).toHaveBeenCalled();
    });
  });

  describe('Delete All Modal', function () {
    var mockBackend, modalFactory, key = 'TEST';

    beforeEach(function () {
      module('ngResource', function ($provide) {
        var mockModal = $modal(key);
        $provide.value('$modal', mockModal);
        $provide.factory('$modalFactory', app$modalFactory);
      });

      inject(function ($modalFactory, $httpBackend) {
        modalFactory = $modalFactory;
        mockBackend = $httpBackend;
      });
    });

    afterEach(function () {
      mockBackend.verifyNoOutstandingExpectation();
      mockBackend.verifyNoOutstandingRequest();
    });

    it('click submit should execute callback with email', function () {
      var callback = jasmine.createSpyObj('callback', ['callback']);
      modalFactory.confirmModal(key, 'title', 'message', callback.callback);
      expect(callback.callback).toHaveBeenCalled();
    });
  });

});