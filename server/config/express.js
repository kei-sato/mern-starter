import Express from 'express';
import bodyParser from 'body-parser';
import path from 'path';

module.exports = function (app, passport) {
  // Apply body Parser and server public assets and routes
  app.use(bodyParser.json({ limit: '20mb' }));
  app.use(bodyParser.urlencoded({ limit: '20mb', extended: false }));
  app.use(Express.static(path.resolve(__dirname, '../../static')));
};
