'use strict';

angular.module('DailyFinanceApp')
  .controller('MainCtrl', function ($scope) {
    $scope.data = [{
      id: 1,
      name: 'A',
      price: 100,
      time: Date.create()
    }];
  });
