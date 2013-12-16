'use strict';

angular.module('DailyFinanceApp')
  .controller('NavbarCtrl', function ($scope, $session, $location, $route, $api, $account, $modalFactory, AuthenticationService) {
    var userId = $session.get('user').userId;

    $scope.logout = function () {
      AuthenticationService.logout().success(function () {
        $location.path('/login');
      });
    };

    $scope.callDeleteAccountAPI = function () {
      $account.delete({
        userId: userId
      }).$promise.then(function () {
        $modalFactory.success('Delete Account!', 'Account has been deleted successfully.', function () {
          $location.path('/login');
        });
      }, function () {
        // error
        $modalFactory.error();
      });
    };

    $scope.deleteAccount = function () {
      $modalFactory.confirmModal('deleteAccount', 'Delete your account?', 'Are you sure want to delete this account? All related data will be deleted and this action cannot be undone.', function () {
        $scope.callDeleteAccountAPI();
      });
    };

    $scope.batchDelete = function () {
      $api.batchDelete({
        userId: userId
      }).$promise.then(function () {
        $modalFactory.success('Delete All expenses!', 'All expenses are deleted successfully.', function () {
          $route.reload();
        });
      }, function () {
        // error
        $modalFactory.error();
      });
    };

    $scope.deleteAll = function () {
      $modalFactory.confirmModal('deleteAll', 'Delete all items?', 'Are you sure want to delete all expenses?', function () {
        $scope.batchDelete();
      });
    };
  });
