'use strict';

angular.module('DailyFinanceApp')
  .controller('MainCtrl', function ($scope, $location) {
    $scope.data = [{
      id: 1,
      name: 'A',
      price: 100,
      time: Date.create()
    }, {
      id: 2,
      name: 'b',
      price: 200,
      time: Date.create()
    }];

    $scope.addNew = function() {
      $location.path('/addNew');
    };
  });
