'use strict';

angular.module('DailyFinanceApp')
  .directive('navbar', function () {
    return {
      templateUrl: 'views/directives/navbar.html',
      restrict: 'E'
    };
  });