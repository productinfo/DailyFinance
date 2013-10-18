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
      'expenses': [{
        'expenseId': '101',
        'name': 'aaa',
        'date': '',
        'time': ''
      }, {
        'expenseId': '102',
        'name': 'bbb',
        'date': '',
        'time': ''
      }]
    }, {
      'userId': '2',
      'expenses': [{
        'expenseId': '201',
        'name': 'ccc',
        'date': '',
        'time': ''
      }, {
        'expenseId': '202',
        'name': 'ddd',
        'date': '',
        'time': ''
      }]
    }]
  };
}));
