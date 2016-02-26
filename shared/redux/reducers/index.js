import { combineReducers } from 'redux';
import user from './user';
import post from './post';
import { routeReducer as routing } from 'react-router-redux';

// Combine reducers with routeReducer which keeps track of
// router state
const rootReducer = combineReducers({
  user,
  post,
  routing
});

export default rootReducer;
