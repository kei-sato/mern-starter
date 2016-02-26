/* eslint no-unused-vars:0 */
import React, { PropTypes } from 'react';
import PostListItem from '../components/PostListItem';
import { connect } from 'react-redux';
import classNames from 'classnames';
import { postActions } from '../redux/actions';

function PostListView(props, context) {
  return (
    <div className={classNames('listView')}>
      {
        props.posts.map((post, i, arr) => (
          <PostListItem post={post} key={i}
            onClick={function handleClick() {
              props.dispatch(postActions.addSelectedPost(post));
            }}
            onDelete={function handleDelete() {
              if (confirm('Do you want to delete this post')) { // eslint-disable-line
                props.dispatch(postActions.deletePostRequest(post));
              }
            }}
          />
        ))
      }
    </div>
  );
}

PostListView.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    cuid: PropTypes.string.isRequired,
  })).isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default connect()(PostListView);
