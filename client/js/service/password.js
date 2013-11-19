'use strict';

function app$password($resource) {
  return $resource('/api/password', {}, {
    lostPassword: {
      method: 'POST'
    }
  });
}

angular.module('DailyFinanceApp')
  .factory('$password', ['$resource', app$password]);
