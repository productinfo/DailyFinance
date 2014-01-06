'use strict';

function app$modalFactory($modal) {
  return {
    success: function (title, message, callback) {
      $modal.messageBox(title, message, [{
        label: 'OK',
        cssClass: 'btn-default',
        result: 'ok'
      }])
        .open()
        .result
        .then(function (result) {
          if (result === 'ok') {
            if (callback) {
              callback();
            }
          }
        });
    },
    retrievePasswordModal: function (callback) {
      $modal.retrievePasswordBox('Retrieve Password', 'Please enter the email address associated with your account', 'Your Email')
        .open()
        .result
        .then(function (result) {
          if (result.type === 'submit') {
            if (callback) {
              callback(result.email);
            }
          }
        });
    },
    confirmModal: function (key, title, message, callback) {
      $modal.messageBox(title, message, [{
        label: 'Close',
        cssClass: 'btn-default',
        result: 'ok'
      }, {
        label: 'Delete',
        cssClass: 'btn-danger',
        result: key
      }])
        .open()
        .result
        .then(function (result) {
          if (result === key) {
            if (callback) {
              callback();
            }
          }
        });
    },
    error: function (title, message) {
      var title = title || 'Error',
        message = message || 'Internal server error...';
      $modal.messageBox(title, message, [{
        label: 'Close',
        cssClass: 'btn-danger',
        result: 'ok'
      }])
        .open();
    }
  };
}

angular.module('DailyFinanceApp')
  .factory('$modalFactory', ['$modal', app$modalFactory]);
