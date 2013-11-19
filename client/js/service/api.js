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
