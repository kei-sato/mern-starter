/* eslint no-unused-vars:0 */
import { Route, IndexRoute } from 'react-router';
import React from 'react';
import App from './container/App';
import PostContainer from './container/PostContainer';
import PostDetailView from './container/PostDetailView';

// enable to reload on css updated
import cx from 'classnames';
import styles from './scss/app';

const routes = (
  <Route path="/" component={App} >
    <IndexRoute component={PostContainer} />
    <Route path="/post/:slug" component={PostDetailView}/>
  </Route>
);

export default routes;
