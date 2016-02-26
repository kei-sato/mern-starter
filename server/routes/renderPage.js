// React And Redux Setup
import { Provider } from 'react-redux';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { match, RouterContext } from 'react-router';

import routes from '../../shared/routes';
import { configureStore } from '../../shared/redux/store/configureStore';
import { fetchComponentData } from '../util/fetchData';

// Render Initial HTML
const renderFullPage = (html, initialState) => {
  const cssPath = process.env.NODE_ENV === 'production' ? '<link rel="stylesheet" href="/dist/app.css" />' : '';
  return `
    <!doctype html>
    <html>
      <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>MERN Starter - Blog App</title>
        ${cssPath}
        <link href='https://fonts.googleapis.com/css?family=Lato:400,300,700' rel='stylesheet' type='text/css'/>
        <link rel="shortcut icon" href="http://res.cloudinary.com/hashnode/image/upload/v1455629445/static_imgs/mern/mern-favicon-circle-fill.png" type="image/png" />
      </head>
      <body>
        <div id="root">${html}</div>
        <script>
          window.__INITIAL_STATE__ = ${JSON.stringify(initialState)};
        </script>
        <script src="/dist/bundle.js"></script>
      </body>
    </html>
  `;
};

// Server Side Rendering based on routes matched by React-router.
module.exports = function(app, passport) {
  app.use((req, res) => {
    // props differ on each url with given routes.
    // browserHistory take this role on the client side.
    match({ routes, location: req.url }, (err, redirectLocation, renderProps) => {
      if (err) {
        return res.status(500).end('Internal server error');
      }

      if (!renderProps) {
        return res.status(404).end('Not found!');
      }

      const initialState = { posts: [], post: {} };

      const store = configureStore(initialState);

      // get actions to be done before rendering from "components", and "dispatch" them with "params"
      fetchComponentData(store.dispatch, renderProps.components, renderProps.params)
        .then(() => {
          const initialView = renderToString(
            <Provider store={store}>
              <RouterContext {...renderProps} />
            </Provider>
          );
          const finalState = store.getState();

          res.status(200).end(renderFullPage(initialView, finalState));
        })
        .catch(() => {
          res.end(renderFullPage('Error', {}));
        });
    });
  });
};
