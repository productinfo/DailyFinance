'use strict';
var uuid = require('node-uuid');
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
//   uesrId: uuid.v4(),
//   email: 'leo@facebook.com',
//   password: 'leo'
// });

// Leo.save(function (err) {
//   if (err) {
//     console.log(err);
//   }
//   console.log('s');
// });

// UserModel.remove({
//   uesrId: '30028217-13cf-4ef3-b390-feaffefb264e'
//   // email: 't2@t2.com'
// }, function (err) {

// });

// UserModel.find(function (err, user) {
//   if (err) {
//     console.log(err);
//   }
//   console.log(user);
// });

// Expense

// var d1 = new ExpenseModel({
//   uesrId: 1,
//   expenseId: uuid.v4(),
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

// ExpenseModel.remove({
//   expenseId: 202
// }, function (err) {
//   if (err) {
//     console.log('error');
//   }
//   console.log('remove');
// });

ExpenseModel.find({
  uesrId: 'e60c2b49-ae2e-4e53-b9dc-0eced9042b61'
}, function (err, expense) {
  if (err) {
    console.log(err);
  }
  console.log(expense);
});