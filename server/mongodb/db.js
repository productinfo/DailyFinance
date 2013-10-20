'use strict';

var ExpenseModel = require('./model/expense').ExpenseModel;

module.exports = {
  getList: function(userId) {
    ExpenseModel.find({
      uesrId: userId
    }, function (err, data) {
      if (err) {
        console.log(err);
      }
      console.log(data);
    })
  }
};