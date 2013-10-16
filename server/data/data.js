'use strict';

(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(factory);
  } else if (typeof exports === 'object') {
    module.exports = factory();
  } else {
    root.data = factory();
  }
}(this, function () {
  return {
    'data': [{
      'userId': 1,
      'task': [{
        'taskId': 101,
        'name': 'xyz',
        'date': '',
        'time': ''
      }]
    }]
  };
}));
