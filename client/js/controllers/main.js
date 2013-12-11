'use strict';

angular.module('DailyFinanceApp')
  .controller('MainCtrl', function ($scope, $session, $location, $api, $modalFactory) {

    var userId = $session.get('user').uesrId;

    $scope.addButtonTitle = '  Add New Expense';

    $scope.total = 0;

    $api.query({
      userId: userId
    }).$promise.then(function (data) {
      $scope.data = data;
      data.forEach(function (val) {
        $scope.total += val.price;
      });
    }, function () {
      // error
      $modalFactory.error();
    });

    $scope.addNew = function () {
      $location.path('/addNew');
    };
  });
