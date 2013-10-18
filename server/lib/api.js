'use strict';

var expense = require('./expense'),
  Authentication = require('./authentication');

module.exports = function (app) {
  app.get('/api/expense', Authentication.ensureAuthenticated, expense.getList);
  app.get('/api/expense/:expenseId', Authentication.ensureAuthenticated, expense.getDetail);
  app.post('/api/expense', Authentication.ensureAuthenticated, expense.createNew);
};
