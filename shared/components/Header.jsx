/* eslint no-unused-vars: 0 */
/* eslint-disable prefer-template*/
import React, { PropTypes, Component } from 'react';
import { Link } from 'react-router';

import classNames from 'classnames/bind';
import styles from '../scss/app';
let cx = classNames.bind(styles);

function Header(props, context) {
  return (
    <div className={cx('header')}>
      <div className={cx('header-content')}>
        <h1 className={cx('site-title')}>
          <Link to="/" onClick={props.handleLogoClick}>MERN Starter Blog</Link>
        </h1>
        {
          context.router.isActive('/', true)
            ? <a className={cx('add-post-button')} href="#" onClick={props.onClick}>Add Post</a>
            : null
        }
      </div>
    </div>
  );
}

Header.contextTypes = {
  router: React.PropTypes.object,
};

Header.propTypes = {
  onClick: PropTypes.func.isRequired,
  handleLogoClick: PropTypes.func,
};

export default Header;
