/* eslint no-unused-vars:0 */
import { Route, IndexRoute } from 'react-router';
import React from 'react';
import App from './container/App';
import PostContainer from './container/PostContainer/PostContainer';
import PostDetailView from './container/PostDetailView/PostDetailView';

// enable to reload on css updated
import classNames from 'classnames/bind';
import styles from './scss/app';
let cx = classNames.bind(styles);

const routes = (
  <Route path="/" component={App} >
    <IndexRoute component={PostContainer} />
    <Route path="/post/:slug" component={PostDetailView}/>
  </Route>
);

export default routes;
