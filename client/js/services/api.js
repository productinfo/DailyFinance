'use strict';

function app$api($resource) {
  return $resource('/api/expense/:expenseId', {}, {
    query: {
      method: 'GET',
      params: {
        userId: '@userId'
      },
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
      method: 'DELETE',
      params: {
        userId: '@userId'
      }
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
