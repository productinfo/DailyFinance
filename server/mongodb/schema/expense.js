'use strict';

var mongoose = require('mongoose');

var ExpenseSchema = mongoose.Schema({
  uesrId: Number,
  expenseId: Number,
  name: String,
  price: Number,
  date: String,
  time: String
});

module.exports.ExpenseSchema = ExpenseSchema;