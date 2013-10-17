'use strict';

require('sugar');

var users = [{
  id: 1,
  email: 'g@g.com',
  password: 'gg'
}, {
  id: 2,
  email: 'f@f.com',
  password: 'ff'
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
