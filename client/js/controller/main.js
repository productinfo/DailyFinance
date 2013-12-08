'use strict';

angular.module('DailyFinanceApp')
  .controller('MainCtrl', function ($scope, $session, $location, $api, $modalFactory) {

    var userId = $session.get('user').uesrId;

    $scope.addButtonTitle = '  Add New Expense';

    $api.query({
      userId: userId
    }).$promise.then(function (data) {
      $scope.data = data;
    }, function () {
      // error
      $modalFactory.error();
    });

    $scope.addNew = function () {
      $location.path('/addNew');
    };
  });
