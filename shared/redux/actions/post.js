/* eslint no-unused-vars: 0 */
import request from 'axios';
import * as ActionTypes from '../constants';

function makeRequest({ method='get', path='', data }) {
  return request[method](path, data);
}

export function addPost(post) {
  return {
    type: ActionTypes.ADD_POST,
    name: post.name,
    title: post.title,
    content: post.content,
    slug: post.slug,
    cuid: post.cuid,
    _id: post._id,
  };
}

export function changeSelectedPost(slug) {
  return {
    type: ActionTypes.CHANGE_SELECTED_POST,
    slug,
  };
}

export function addPostRequest(post) {
  return (dispatch) => {
    const data = {
      post: {
        name: post.name,
        title: post.title,
        content: post.content,
      },
    };
    return makeRequest({ method: 'post', path: '/api/addPost', data })
    .then(res => dispatch(addPost(res.data.post)));
  };
}

export function addSelectedPost(post) {
  return {
    type: ActionTypes.ADD_SELECTED_POST,
    post,
  };
}

export function getPostRequest(post) {
  return (dispatch) => {
    return makeRequest({ path: `/api/getPost?slug=${post}` })
    .then(res => dispatch(addSelectedPost(res.data.post)));
  };
}

export function deletePost(post) {
  return {
    type: ActionTypes.DELETE_POST,
    post,
  };
}

export function addPosts(posts) {
  return {
    type: ActionTypes.ADD_POSTS,
    posts,
  };
}

export function fetchPosts() {
  return (dispatch) => {
    return makeRequest({ path: '/api/getPosts' })
    .then((res) => dispatch(addPosts(res.data.posts)));
  };
}

export function deletePostRequest(post) {
  return (dispatch) => {
    return makeRequest({ method: 'post', path: '/api/deletePost', data: { postId: post._id } })
    .then((res) => dispatch(deletePost(post)));
  };
}
