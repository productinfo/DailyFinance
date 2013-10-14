'use strict';

function app$api ($resource) {
  return $resource('/api/:id', {}, {
    get: {

    }
  });
}

angular.module('DailyFinanceApp')
  .factory('$api', ['$resource', app$api]);