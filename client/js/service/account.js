'use strict';

function app$account($resource) {
  return $resource('/api/account', {}, {
    create: {
      method: 'POST'
    }
  });
}

angular.module('DailyFinanceApp')
  .factory('$account', ['$resource', app$account]);
