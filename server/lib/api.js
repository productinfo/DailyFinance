'use strict';

var expense = require('./expense'),
  Authentication = require('./authentication');

module.exports = function (app) {

  // GET List
  app.get('/api/expense', Authentication.ensureAuthenticated, expense.getList);

  // GET Detail
  app.get('/api/expense/:expenseId', Authentication.ensureAuthenticated, expense.getDetail);

  // POST (creat new)
  app.post('/api/expense', Authentication.ensureAuthenticated, expense.createNew);
};
