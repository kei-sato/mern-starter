import User from '../../models/user';
import local from './local';

module.exports = function(app, passport) {
  passport.serializeUser(function(user, done) {
    console.log('serializeUser', user);
    done(null, user._id);
  });

  passport.deserializeUser(function(id, done) {
    console.log('deserializeUser', id);
    User.findById(id, function(err, user) {
      done(err, user);
    });
  });

  //use the following strategies
  passport.use(local);
};
