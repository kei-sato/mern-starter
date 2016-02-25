/* eslint-disable no-unused-vars*/
/* eslint-disable prefer-template*/
import React, { Component, PropTypes } from 'react';

import classNames from 'classnames/bind';
import styles from '../scss/app';
let cx = classNames.bind(styles);

class PostCreateView extends Component {
  constructor(props, context) {
    super(props, context);
    this.addPost = this.addPost.bind(this);
  }

  addPost() {
    const nameRef = this.refs.name;
    const titleRef = this.refs.title;
    const contentRef = this.refs.content;
    if (nameRef.value && titleRef.value && contentRef.value) {
      this.props.addPost(nameRef.value, titleRef.value, contentRef.value);
      nameRef.value = titleRef.value = contentRef.value = '';
    }
  }

  render() {
    // const cls = 'form ' + (this.props.showAddPost ? 'appear' : '');
    const cls = cx({
      form: true,
      appear: this.props.showAddPost
    });
    return (
      <div className={cls}>
        <div className={cx('form-content')}>
          <h2 className={cx('form-title')}>Create new post</h2>
          <input placeholder="Author's Name" className={cx('form-field')} ref="name"/>
          <input placeholder="Post Title" className={cx('form-field')} ref="title"/>
          <textarea placeholder="Post Content" className={cx('form-field')} ref="content"></textarea>
          <a className={cx('post-submit-button', 'align-right')} href="#" onClick={this.addPost}>Submit</a>
        </div>
      </div>
    );
  }
}

PostCreateView.propTypes = {
  addPost: PropTypes.func.isRequired,
  showAddPost: PropTypes.bool.isRequired,
};

export default PostCreateView;
