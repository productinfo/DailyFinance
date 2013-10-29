'use strict';

var mongoose = require('mongoose');

var UserSchema = mongoose.Schema({
  uesrId: String,
  email: String,
  password: String
});

module.exports.UserSchema = UserSchema;