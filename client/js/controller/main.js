'use strict';

angular.module('DailyFinanceApp')
  .controller('MainCtrl', function ($scope, $session, $location, $api) {

    var userId = $session.get('user').id;

    $scope.addButtonTitle = '  Add New Expense';

    $api.query({
      userId: userId
    }).$promise.then(function (data) {
      $scope.data = data;
    }, function () {
      console.log('eee');
      console.log($('#errorWarning'));
      // error
      $('#errorWarning').modal({
        show: true
      });
    });

    $scope.addNew = function () {
      $location.path('/addNew');
    };
  });
