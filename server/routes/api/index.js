module.exports = function(app, passport) {
  require('./post')(app, passport);
  require('./user')(app, passport);
};
