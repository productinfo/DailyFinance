'use strict';

angular.module('DailyFinanceApp')
  .controller('NavbarCtrl', function ($scope, $session, $location, $route, $api, $modalFactory, AuthenticationService) {
    var userId = $session.get('user').userId;

    $scope.logout = function () {
      AuthenticationService.logout().success(function () {
        $location.path('/login');
      });
    };

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
