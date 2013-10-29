'use strict';

var mongoose = require('mongoose');

var ExpenseSchema = mongoose.Schema({
  uesrId: String,
  expenseId: String,
  name: String,
  price: Number,
  date: String,
  time: String
});

module.exports.ExpenseSchema = ExpenseSchema;