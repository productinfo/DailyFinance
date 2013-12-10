'use strict';

function app$$modalFactory($modal) {
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
    deleteAllModal: function (callback) {
      $modal.messageBox('Delete all items', 'Are you sure want to delete all expenses?', [{
        label: 'Close',
        cssClass: 'btn-default',
        result: 'ok'
      }, {
        label: 'Delete',
        cssClass: 'btn-danger',
        result: 'deleteAll'
      }])
        .open()
        .result
        .then(function (result) {
          if (result === 'deleteAll') {
            if (callback) {
              callback();
            }
          }
        });
    },
    deleteModal: function (callback) {
      $modal.messageBox('Delete this item', 'Are you sure want to delete this expense?', [{
        label: 'Close',
        cssClass: 'btn-default',
        result: 'ok'
      }, {
        label: 'Delete',
        cssClass: 'btn-danger',
        result: 'delete'
      }])
        .open()
        .result
        .then(function (result) {
          if (result === 'delete') {
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
        cssClass: 'btn-default',
        result: 'ok'
      }])
        .open();
    }
  };
}

angular.module('DailyFinanceApp')
  .factory('$modalFactory', ['$modal', app$$modalFactory]);
