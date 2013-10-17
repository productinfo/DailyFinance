'use strict';

function app$api($resource) {
  return $resource('/api/expense', {}, {
    query: {
      method: 'GET',
      params: {
        userId: '@userId'
      },
      isArray: true
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
