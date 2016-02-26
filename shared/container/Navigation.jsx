import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import classNames from 'classnames';
import { logOut } from '../redux/actions/users';

class Navigation extends Component {

  render() {
    const { dispatch } = this.props;
    return (
      <nav className={classNames('navigation')} role="navigation">
          <Link to="/" className={classNames('navigation__item', 'navigation__item--logo')} activeClassName={classNames('navigation__item--active')}>Ninja Ocean</Link>
          { this.props.user.authenticated ? (
            <Link onClick={()=> dispatch(logOut())} className={classNames('navigation__item')} to="/">Logout</Link>
          ) : (
            <Link className={classNames('navigation__item')} to="/login">Log in</Link>
          )}
          <Link className={classNames('navigation__item')} to="/dashboard">Dashboard</Link>
      </nav>
    );
  }

}

Navigation.propTypes = {
  user: PropTypes.object,
  dispatch: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    user: state.user
  };
}

export default connect(mapStateToProps)(Navigation);
