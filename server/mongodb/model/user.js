'use strict';

var mongoose = require('mongoose'),
  UserSchema = require('../schema/user').UserSchema,
  UserModel = mongoose.model('User', UserSchema);

module.exports.UserModel = UserModel;