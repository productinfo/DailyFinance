'use strict';

var mongoose = require('mongoose');

var ExpenseSchema = mongoose.Schema({
  data: [
    userId: Number,
    expenses: [

    ]
  ]
});

module.exports.ExpenseSchema = ExpenseSchema;