'use strict';

function app$signUp($resource) {
  return $resource('/api/signup', {}, {
    create: {
      method: 'POST',
      params: {
        name: '@name',
        email: '@email',
        password: '@password',
      }
    }
  });
}

angular.module('DailyFinanceApp')
  .factory('$signUp', ['$resource', app$signUp]);
