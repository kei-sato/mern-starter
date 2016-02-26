/* eslint no-unused-vars: 0 */
/* eslint-disable prefer-template*/
import React, { PropTypes, Component } from 'react';
import { Link } from 'react-router';
import classNames from 'classnames';

function PostListItem(props, context) {
  return (
    <div className={classNames('single-post')}>
      <h3 className={classNames('post-title')}>
        <Link to={'/post/' + props.post.slug + '-' + props.post.cuid} onClick={props.onClick}>
            {props.post.title}
        </Link>
      </h3>
      <p className={classNames('author-name')}>By {props.post.name}</p>
      <p className={classNames('post-desc')}>{props.post.content}</p>
      <p className={classNames('post-action')}><a href="#" onClick={props.onDelete}>Delete Post</a></p>
      <hr className={classNames('divider')}/>
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
