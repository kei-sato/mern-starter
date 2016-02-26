import Express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import session from 'express-session';
import flash from 'express-flash';
import serverConfig from './index';

var MongoStore =  require('connect-mongo')(session);

module.exports = function (app, passport) {
  // X-Powered-By header has no functional value.
  // Keeping it makes it easier for an attacker to build the site's profile
  // It can be removed safely
  app.disable('x-powered-by');

  // https://github.com/passport/express-4.x-local-example/blob/master/server.js
  // Use application-level middleware for common functionality, including
  // logging, parsing, and session handling.
  app.use(require('morgan')('combined'));
  app.use(require('cookie-parser')());

  // Apply body Parser and server public assets and routes
  app.use(bodyParser.json({ limit: '20mb' }));
  app.use(bodyParser.urlencoded({ limit: '20mb', extended: true }));
  app.use(Express.static(path.resolve(__dirname, '../../static')));

  var sess = {
    resave: true,
    saveUninitialized: false,
    secret: serverConfig.sessionSecret,
    proxy: true, // The "X-Forwarded-Proto" header will be used.
    name: 'sessionId',
    // Add HTTPOnly, Secure attributes on Session Cookie
    // If secure is set, and you access your site over HTTP, the cookie will not be set
    cookie: {
      httpOnly: true,
      secure: false,
    },
    store: new MongoStore(
      {
        url: serverConfig.mongoURL,
        autoReconnect: true
      }
    )
  };

  app.use(session(sess));

  app.use(passport.initialize());
  app.use(passport.session());

  app.use(flash());
};
