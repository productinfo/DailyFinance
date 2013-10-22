'use strict';

angular.module('DailyFinanceApp', [
  'ngRoute',
  'ngResource'
])
  .service('$flash', function ($rootScope) {
    this.show = function (message) {
      $rootScope.flash = message;
    };

    this.clear = function () {
      $rootScope.flash = '';
    };
  })
  .factory('$session', function () {
    return {
      get: function (key) {
        return angular.fromJson(sessionStorage.getItem(key));
      },
      set: function (key, value) {
        return sessionStorage.setItem(key, angular.toJson(value));
      },
      unset: function (key) {
        return sessionStorage.removeItem(key);
      },
      clear: function () {
        return sessionStorage.clear();
      }
    };
  })
  .factory('LogoutHttpInterceptor', function ($location, $q, $session) {
    var success = function (response) {
      return response;
    };

    var error = function (response) {
      // unauthorized
      if (response.status === 401) {
        $session.unset('user');
        $location.path('/login');
        return $q.reject(response);
      } else {
        return $q.reject(response);
      }
    };

    return function (promise) {
      return promise.then(success, error);
    };
  })
  .service('AuthenticationService', function ($http, $timeout, $q, $session, $flash) {
    this.login = function (credentials) {
      var login = $http.post('/login', credentials);
      login.success(function (user) {
        $session.set('user', user);
        $flash.clear();
      }).error(function (error) {
        error = error.error ? error.error : error;
        $flash.show(error.message || error);
      });
      return login;
    };

    this.logout = function () {
      var logout = $http.get('/logout');
      logout.success(function () {
        $session.clear();
      });
      return logout;
    };

    // get user data
    this.user = function () {
      var user = $session.get('user');
      if (user) {
        var deferred = $q.defer();
        $timeout(function () {
          deferred.resolve(user);
        }, 0);
        return deferred.promise;
      } else {
        return $http.get('/user');
      }
    };
  })
  .config(function ($httpProvider) {
    $httpProvider.responseInterceptors.push('LogoutHttpInterceptor');
  })
  .run(['$rootScope', '$location', 'AuthenticationService',
    function ($rootScope, $location, AuthenticationService) {
      // logout
      $rootScope.logout = function () {
        var logout = AuthenticationService.logout();
        logout.then(function () {
          $location.path('/login');
        });
        return logout;
      };
    }
  ])
  .run(['$rootScope', '$location', 'AuthenticationService',
    function ($rootScope, $location, AuthenticationService) {
      // login
      var publicRoutes = ['/login'];
      $rootScope.$on('$routeChangeStart', function () {
        if (publicRoutes.indexOf($location.path()) === -1) {
          AuthenticationService.user();
        }
      });
    }
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        title: 'Main',
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/login', {
        title: 'Login',
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl'
      })
      .when('/addNew', {
        title: 'Add New',
        templateUrl: 'views/addNew.html',
        controller: 'AddNewCtrl'
      })
      .when('/detail/:id', {
        title: 'Detail',
        templateUrl: 'views/detail.html',
        controller: 'DetailCtrl',
        reloadOnSearch: false
      })
      .otherwise({
        redirectTo: '/login'
      });
  });
