'use strict';

require('sugar');

var users = [{
  id: 1,
  email: 'leo0924@gmail.com',
  password: 'pw'
}];

module.exports = {
  findById: function (id) {
    return users.find(function (user) {
      return user.id === id;
    });
  },
  findByEmail: function (email) {
    return users.find(function (user) {
      return user.email === email;
    });
  }
};
