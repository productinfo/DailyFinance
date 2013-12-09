'use strict';

describe('Module: uiModule', function () {
  var scope, mockBackend, modal;

  beforeEach(module('DailyFinanceApp'));

  beforeEach(inject(function ($rootScope, $httpBackend, $modal) {
    mockBackend = $httpBackend;
    modal = $modal;
    scope = $rootScope.$new();
  }));

  afterEach(function () {
    mockBackend.verifyNoOutstandingExpectation();
    mockBackend.verifyNoOutstandingRequest();
  });

  it('should attempt to retrive html used for modals messageBox', function () {
    modal.messageBox('title', 'message', 'buttons', {}).open();
    mockBackend.expectGET('views/modal/message.html').respond({});
    mockBackend.flush();
  });

  it('should attempt to retrive html used for modals messageBox with minimal settings', function () {
    modal.messageBox().open();
    mockBackend.expectGET('views/modal/message.html').respond({});
    mockBackend.flush();
  });

  xit('should attempt to retrive html used for modals retrievePasswordBox', function () {
    // TODO
  });
});