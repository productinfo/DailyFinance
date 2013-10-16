'use strict';

var passport = require('passport'),
  LocalStrategy = require('passport-local').Strategy,
  User = require('./users');

module.exports = {
  localStrategy: new LocalStrategy(function (email, password, done) {
    var user = User.findByEmail(email);
    if (!user) {
      return done(null, false, {
        message: 'Incorrect email.'
      });
    } else if (user.password !== password) {
      return done(null, false, {
        message: 'Incorrect password.'
      });
    } else {
      return done(null, user);
    }
  }),

  // session useage
  serializeUser: function (user, done) {
    done(null, user.id);
  },

  deserializeUser: function (id, done) {
    var user = User.findById(id);
    if (user) {
      done(null, user);
    } else {
      done(null, false);
    }
  },
  login: function (req, res, next) {
    return passport.authenticate('local', function (err, user) {
      if (err) {
        return next(err);
      }
      if (!user) {
        return res.send(400, {
          message: 'Bad email or password.'
        });
      }
      req.logIn(user, function (err) {
        if (err) {
          return next(err);
        }
        res.json(200, user);
      });
    })(req, res, next);
  },
  logout: function (req, res) {
    req.logout();
    return res.send(200);
  },
  ensureAuthenticated: function (req, res, next) {
    if (req.isAuthenticated()) {
      return next();
    } else {
      return res.send(401);
    }
  }
};
