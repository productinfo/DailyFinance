'use strict';

angular.module('DailyFinanceApp')
  .controller('AddNewCtrl', function ($scope, $api) {
    $scope.create = function() {
      console.log(this.task);
      $api.create({

      }).$promise.then(function () {
        console.log('s');
      }, function () {
        console.log('e');
      });
    };
  });
