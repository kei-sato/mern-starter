// Webpack Requirements
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import config from '../../webpack.config.dev';

module.exports = function (app, passport) {
  if (process.env.NODE_ENV !== 'production') {
    const compiler = webpack(config);
    app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }));
    app.use(webpackHotMiddleware(compiler));
  }
};
