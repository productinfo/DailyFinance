'use strict';

angular.module('DailyFinanceApp')
  .controller('NavbarCtrl', function ($scope, $session, $route, $api, $modalFactory) {

    var userId = $session.get('user').uesrId;

    $scope.deleteAll = function () {
      $modalFactory.deleteAllModal(function () {
        $api.batchDelete({
          userId: userId
        }).$promise.then(function () {
          $modalFactory.success('Delete All expenses!', 'All expenses are successfully deleted.', function () {
            $route.reload();
          });
        }, function () {
          // error
          $modalFactory.error();
        });
      });
    };
  });
