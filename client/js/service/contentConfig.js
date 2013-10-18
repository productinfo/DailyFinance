'use strict';

function app$contentConfig() {
  return {
    addNew: {
      legend: 'Create New Expense',
      subTitle: 'Please input details',
      submitButtonTitle: '  Create',
      isDeleteButtonShow: false
    },
    detail: {
      legend: 'Detail of you expense',
      subTitle: 'Click to edit',
      submitButtonTitle: '  Update',
      deleteButtonTitle: '  Delete',
      isDeleteButtonShow: true
    }
  };
}

angular.module('DailyFinanceApp')
  .factory('$contentConfig', [app$contentConfig]);
