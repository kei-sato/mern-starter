import passport from 'passport';
import User from '../models/user';

/**
 * POST /login
 */
exports.postLogin = function(req, res, next) {
  // Do username and password validation for the server
  passport.authenticate('local', function(err, user, info) {
    if (err) return next(err);
    if (!user) return res.status(401).send(info);
    // Passport exposes a login() function on req (also aliased as logIn()) that can be used to establish a login session
    req.logIn(user, function(err) {
      if (err) return next(err);
      res.status(200).send('OK');
    });
  })(req, res, next);
};


/**
 * GET /logout
 */
exports.getLogout = function(req, res) {
  // Do username and password validation for the server
  req.logout();
  res.redirect('/');
};

/**
 * POST /signup
 * Create a new local account
 */
exports.postSignUp = function(req, res, next) {
  var user =  new User({
    id      : Number(req.body.id),
    username: req.body.username,
    password: req.body.password
  });

  User.findOne({username: req.body.username}, function(err, existingUser) {
    if(existingUser) {
      req.flash('errors', { msg: 'Account with that username address already exists' });
    }
    user.save(function(err) {
      if(err) return next(err);
      req.logIn(user, function(err) {
        if(err) return next(err);
        console.log('Successfully created');
        res.end('Success');
      });
    });
  });
};
