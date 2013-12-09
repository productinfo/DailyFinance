'use strict';

function app$password($resource) {
  return $resource('/api/password', {}, {
    retrievePassword: {
      method: 'POST'
    }
  });
}

angular.module('DailyFinanceApp')
  .factory('$password', ['$resource', app$password]);
