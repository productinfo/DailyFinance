'use strict';

describe('Services: contentConfig', function () {
  var mockBackend, contentConfig;

  beforeEach(module('DailyFinanceApp'));

  beforeEach(inject(function ($injector) {
    contentConfig = $injector.get('$contentConfig');
    mockBackend = $injector.get('$httpBackend');
  }));

  afterEach(function () {
    mockBackend.verifyNoOutstandingExpectation();
    mockBackend.verifyNoOutstandingRequest();
  });

  it('addNew should return proper values', function () {
    var addNew = contentConfig.addNew;
    expect(addNew.legend).toBe('Create New Expense');
    expect(addNew.subTitle).toBe('Please input details');
    expect(addNew.submitButtonTitle).toBe('  Create');
    expect(addNew.isDeleteButtonShow).toBe(false);
  });

  it('detail should return proper values', function () {
    var detail = contentConfig.detail;
    expect(detail.legend).toBe('Detail of you expense');
    expect(detail.subTitle).toBe('Click to edit');
    expect(detail.submitButtonTitle).toBe('  Update');
    expect(detail.deleteButtonTitle).toBe('  Delete');
    expect(detail.isDeleteButtonShow).toBe(true);
  });
});