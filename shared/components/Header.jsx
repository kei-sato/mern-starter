/* eslint no-unused-vars: 0 */
/* eslint-disable prefer-template*/
import React, { PropTypes, Component } from 'react';
import { Link } from 'react-router';
import classNames from 'classnames';

function Header(props, context) {
  return (
    <div className={classNames('header')}>
      <div className={classNames('header-content')}>
        <h1 className={classNames('site-title')}>
          <Link to="/" onClick={props.handleLogoClick}>MERN Starter Blog</Link>
        </h1>
        {
          context.router.isActive('/', true)
            ? <a className={classNames('add-post-button')} href="#" onClick={props.onClick}>Add Post</a>
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
