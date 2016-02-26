import request from 'axios';
import * as types from '../constants';

function makeRequest({ method='get', path='', data }) {
  return request[method](path, data);
}

// Log In Action Creators
function beginLogin() {
  return { type: types.MANUAL_LOGIN_USER };
}

function loginSuccess() {
  return { type: types.LOGIN_SUCCESS_USER };
}

function loginError() {
  return { type: types.LOGIN_ERROR_USER };
}

// Sign Up Action Creators
function signUpError() {
  return { type: types.SIGNUP_ERROR_USER };
}

function beginSignUp() {
  return { type: types.SIGNUP_USER };
}

function signUpSuccess() {
  return { type: types.SIGNUP_SUCCESS_USER };
}

// Log Out Action Creators
function beginLogout() {
  return { type: types.LOGOUT_USER};
}

function logoutSuccess() {
  return { type: types.LOGOUT_SUCCESS_USER};
}

function logoutError() {
  return { type: types.LOGOUT_ERROR_USER};
}

export function manualLogin(data) {
  return dispatch => {
    dispatch(beginLogin());

    return makeRequest({ method: 'post', path: '/login', data })
    .then(res => {
      if (res.status === 200) {
        dispatch(loginSuccess());
      } else {
        dispatch(loginError());
      }
    })
    .catch(res => {
      if (res instanceof Error) return console.error(res);
      dispatch(loginError());
    });
  };
}

export function signUp(data) {
  return dispatch => {
    dispatch(beginSignUp());

    return makeRequest({ method: 'post', path: '/signup', data })
      .then( res => {
        if (res.status === 200) {
          dispatch(signUpSuccess());
        } else {
          dispatch(signUpError());
        }
      });
  };
}

export function logOut() {
  return dispatch => {
    dispatch(beginLogout());

    return makeRequest({ path: '/logout' })
    .then(res => {
      if (res.status === 200) {
        dispatch(logoutSuccess());
      } else {
        dispatch(logoutError());
      }
    });
  };
}

