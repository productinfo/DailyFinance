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
      method: 'POST',
      params: {
        userId: '@userId',
        payload: '@payload'
      }
    },
    update: {
      method: 'PUT',
      params: {
        expenseId: '@expenseId',
        userId: '@userId',
        payload: '@payload'
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
