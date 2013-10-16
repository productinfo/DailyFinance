'use strict';

function app$api ($resource) {
  return $resource('/api/task/:userId', {}, {
    get: {
      method: 'GET'
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