'use strict';

var expense = require('./expense'),
  signUp = require('./signUp'),
  Authentication = require('./authentication');

module.exports = function (app) {

  // sign up
  app.post('/api/signup', signUp.create);

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
};
