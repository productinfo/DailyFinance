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
      method: 'GET',
    },
    create: {
      method: 'POST',
      params: {
        userId: '@userId',
        payload: '@payload'
      }
    },
    update: {
      method: 'PUT'
    },
    delete: {
      method: 'DELETE'
    }
  });
}

angular.module('DailyFinanceApp')
  .factory('$api', ['$resource', app$api]);
