'use strict';

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');
// var db = mongoose.connection;

var UserModel = require('./model/user').UserModel;
var ExpenseModel = require('./model/expense').ExpenseModel;

// User

// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function callback () {
//   console.log('connected!');
// });

// var Leo = new UserModel({
//   uesrId: 1,
//   email: 'leo@google.com',
//   password: 'leo'
// });

// Leo.save(function (err) {
//   if (err) {
//     console.log(err);
//   }
//   console.log('s');
// });

// UserModel.find(function (err, user) {
//   if (err) {
//     console.log(err);
//   }
//   console.log(user);
// });

// Expense

// var d1 = new ExpenseModel({
//   uesrId: 2,
//   expenseId: 202,
//   name: 'gg2',
//   price: 32.1,
//   date: '',
//   time: ''
// });

// d1.save(function (err) {
//   if (err) {
//     console.log(err);
//   }
//   console.log('s');
// });

ExpenseModel.find(function (err, expense) {
  if (err) {
    console.log(err);
  }
  console.log(expense);
});