'use strict';

var expense = require('./expense'),
  account = require('./account'),
  password = require('./password'),
  Authentication = require('./authentication');

module.exports = function (app) {

  // sign up
  app.post('/api/account', account.create);

  // lost password
  app.post('/api/password', password.retrievePassword);

  // delete account
  app.delete('/api/account', Authentication.ensureAuthenticated, account.delete);

  // GET List
  app.get('/api/expense', Authentication.ensureAuthenticated, expense.getList);

  // GET Detail
  app.get('/api/expense/:expenseId', Authentication.ensureAuthenticated, expense.getDetail);

  // POST (creat new expense)
  app.post('/api/expense', Authentication.ensureAuthenticated, expense.create);

  // PUT (update detail)
  app.put('/api/expense/:expenseId', Authentication.ensureAuthenticated, expense.update);

  // DELETE (delete expense)
  app.delete('/api/expense/:expenseId', Authentication.ensureAuthenticated, expense.delete);

  // DELETE All (delete all expense)
  app.delete('/api/expense', Authentication.ensureAuthenticated, expense.batchDelete);
};
