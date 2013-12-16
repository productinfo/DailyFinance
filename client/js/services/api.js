'use strict';

function app$api($resource) {
  return $resource('/api/expense/:expenseId', {}, {
    query: {
      method: 'GET',
      isArray: true
    },
    get: {
      method: 'GET'
    },
    create: {
      method: 'POST'
    },
    update: {
      method: 'PUT',
      params: {
        expenseId: '@expenseId'
      }
    },
    batchDelete: {
      method: 'DELETE'
    },
    delete: {
      method: 'DELETE',
      params: {
        userId: '@userId'
      }
    }
  });
}

angular.module('DailyFinanceApp')
  .factory('$api', ['$resource', app$api]);
