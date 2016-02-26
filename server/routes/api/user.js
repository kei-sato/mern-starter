import * as ctl from '../../controllers/user';

module.exports = function(app) {
  app.post('/login', ctl.postLogin);
  app.post('/signup', ctl.postSignUp);
  app.get('/logout', ctl.getLogout);
};
