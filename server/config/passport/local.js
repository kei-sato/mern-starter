import mongoose from 'mongoose';
import { Strategy } from 'passport-local';
import User from '../../models/user';

const strategy = new Strategy({
  usernameField : 'username'
}, function(username, password, done) {
  User.findOne({ username: username }, function(err, user) {
    if (err) return done(err);
    if (!user) return done(null, user, 'username ' + username + ' not found');
    user.comparePassword(password, function(err, isMatch) {
      if (isMatch) {
        return done(null, user);
      } else {
        return done('Invalid username or password');
      }
    });
  });
});

export default strategy;
