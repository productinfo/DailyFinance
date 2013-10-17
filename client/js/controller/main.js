'use strict';

angular.module('DailyFinanceApp')
  .controller('MainCtrl', function ($scope, $session, $location, $api) {

    var userId = $session.get('user').id;

    $api.query({
      userId: userId
    }, function (data) {
      $scope.data = data;
    });

    $scope.addNew = function () {
      $location.path('/addNew');
    };
  });
