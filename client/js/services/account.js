'use strict';

function app$account($resource) {
  return $resource('/api/account', {}, {
    delete: {
      method: 'DELETE'
    },
    create: {
      method: 'POST'
    }
  });
}

angular.module('DailyFinanceApp')
  .factory('$account', ['$resource', app$account]);
