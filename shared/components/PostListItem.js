/* eslint no-unused-vars: 0 */
/* eslint-disable prefer-template*/
import React, { PropTypes, Component } from 'react';
import { Link } from 'react-router';

import cx from 'classnames';

function PostListItem(props, context) {
  return (
    <div className={cx('single-post')}>
      <h3 className={cx('post-title')}>
        <Link to={'/post/' + props.post.slug + '-' + props.post.cuid} onClick={props.onClick}>
            {props.post.title}
        </Link>
      </h3>
      <p className={cx('author-name')}>By {props.post.name}</p>
      <p className={cx('post-desc')}>{props.post.content}</p>
      <p className={cx('post-action')}><a href="#" onClick={props.onDelete}>Delete Post</a></p>
      <hr className={cx('divider')}/>
    </div>
  );
}

PostListItem.propTypes = {
  post: PropTypes.shape({
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    cuid: PropTypes.string.isRequired,
  }).isRequired,

  onClick: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default PostListItem;
