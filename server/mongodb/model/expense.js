'use strict';

var mongoose = require('mongoose'),
  ExpenseSchema = require('../schema/expense').ExpenseSchema,
  ExpenseModel = mongoose.model('Expense', ExpenseSchema);

module.exports.ExpenseModel = ExpenseModel;

