/* eslint no-unused-vars:0 */
import { Route, IndexRoute } from 'react-router';
import React from 'react';
import App from './container/App';
import Login from './container/Login';
import PostContainer from './container/PostContainer';
import PostDetailView from './container/PostDetailView';

// enable realoading on css updated
import styles from './scss/app';

const Dashboard = props => <div>Welcome to the Dasboard. Stay tuned...</div>;

export default (store) => {
  const requireAuth = (nextState, replace, callback) => {
    const { user: { authenticated } } = store.getState();
    if (!authenticated) {
      replace({
        pathname: '/login',
        state: { nextPathname: nextState.location.pathname }
      });
    }
    callback();
  };
  return (
    <Route path="/" component={App} >
      <IndexRoute component={PostContainer} />
      <Route path="login" component={Login} />
      <Route path="dashboard" component={Dashboard} onEnter={requireAuth} />
      <Route path="/post/:slug" component={PostDetailView}/>
    </Route>
  );
};
