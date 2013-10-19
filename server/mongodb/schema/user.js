'use strict';

var mongoose = require('mongoose');

var UserSchema = mongoose.Schema({
  uesrId: Number,
  email: String,
  password: String
});

module.exports.UserSchema = UserSchema;