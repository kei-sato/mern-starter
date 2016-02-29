/* eslint no-unused-vars: 0 */
import expect from 'expect';
import postReducer from '../redux/reducers';
import deepFreeze from 'deep-freeze';
import * as ActionTypes from '../redux/constants';

const initialState = {
  post: {
    posts: [],
    post: null,
  },
  user: {
    authenticated: false,
    isWaiting: false,
  },
};

const post1 = {
  name: 'prank',
  title: 'first post',
  content: 'Hello world!',
  _id: null,
  cuid: null,
  slug: 'first-post',
};

describe('reducer tests', () => {
  it('action ADD_POST is working', () => {
    const stateBefore = initialState;
    const stateAfter = Object.assign({}, initialState, { post: {
      posts: [post1],
      post: null,
    }});
    const action = Object.assign({}, post1, { type: ActionTypes.ADD_POST });

    deepFreeze(stateBefore);
    deepFreeze(action);
    expect(stateAfter).toEqual(postReducer(stateBefore, action));
  });

  it('action ADD_SELECTED_POST is working', () => {
    const stateBefore = Object.assign({}, initialState, { post: {
      posts: [post1],
      post: null,
    }});
    const stateAfter = Object.assign({}, initialState, { post: {
      posts: [post1],
      post: post1,
    }});
    const action = {
      post: post1,
      type: ActionTypes.ADD_SELECTED_POST
    };

    deepFreeze(stateBefore);
    deepFreeze(action);
    expect(stateAfter).toEqual(postReducer(stateBefore, action));
  });
});
