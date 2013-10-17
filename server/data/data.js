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
      'userId': '1',
      'task': [{
        'taskId': '101',
        'name': 'aaa',
        'date': '',
        'time': ''
      }, {
        'taskId': '102',
        'name': 'bbb',
        'date': '',
        'time': ''
      }]
    }, {
      'userId': '2',
      'task': [{
        'taskId': '201',
        'name': 'ccc',
        'date': '',
        'time': ''
      }, {
        'taskId': '202',
        'name': 'ddd',
        'date': '',
        'time': ''
      }]
    }]
  };
}));
