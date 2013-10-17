'use strict';

function app$api ($resource) {
  return $resource('/api/task', {}, {
    query: {
      method: 'GET',
      params: {
        userId: '@userId'
      },
      isArray:true
    },
    create: {
      method: 'POST'
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