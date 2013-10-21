'use strict';

function app$contentConfig() {
  return {
    addNew: {
      legend: 'Create New Expense',
      subTitle: 'Please input details',
      submitButtonTitle: '  Create',
      isDeleteButtonShow: false,
      buttonFunction: 'create()'
    },
    detail: {
      legend: 'Detail of you expense',
      subTitle: 'Click to edit',
      submitButtonTitle: '  Update',
      deleteButtonTitle: '  Delete',
      isDeleteButtonShow: true,
      buttonFunction: 'update()'
    }
  };
}

angular.module('DailyFinanceApp')
  .factory('$contentConfig', [app$contentConfig]);
