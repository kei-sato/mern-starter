import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import { connect } from 'react-redux';
import { manualLogin } from '../redux/actions/users';

class Login extends Component {
  /*
   * This replaces getInitialState. Likewise getDefaultProps and propTypes are just
   * properties on the constructor
   * Read more here: https://facebook.github.io/react/blog/2015/01/27/react-v0.13.0-beta-1.html#es6-classes
   */
  constructor(props) {
    super(props);
    this.onLoginSubmit = this.onLoginSubmit.bind(this);
  }

  onLoginSubmit() {
    const { dispatch } = this.props;
    const username = ReactDOM.findDOMNode(this.refs.username).value;
    const password = ReactDOM.findDOMNode(this.refs.password).value;
    dispatch(manualLogin({
      username: username,
      password: password
    }));
  }

  render() {
    const { authenticated, isWaiting } = this.props.user;
    if (authenticated) {
      return (
        <h1 className={classNames('login__header')}>You are logged in amigo</h1>
      );
    }

    if (isWaiting) {
      return (
        <h1 className={classNames('login__header')}>Waiting ...</h1>
      );
    }

    return (
      <div className={classNames('login__container')}>
        <h1 className={classNames('login__header')}>Login Demo</h1>
        <fieldset className={classNames('login__fieldset')}>
            <input className={classNames('login__input')}
              type="username"
              ref="username"
              placeholder="username" />
            <input className={classNames('login__input')}
              type="password"
              ref="password"
              placeholder="password" />
            <button className={classNames('login__button', 'login__button--green')}
              onClick={this.onLoginSubmit}>Login</button>
            <p className={classNames('login__hint')}>Hint: username: foobar password: foobar</p>
        </fieldset>
      </div>
    );
  }
}

Login.propTypes = {
  user: PropTypes.object,
  dispatch: PropTypes.func
};

// Function passed in to `connect` to subscribe to Redux store updates.
// Any time it updates, mapStateToProps is called.
function mapStateToProps(state) {
  return {
    user: state.user
  };
}

// Connects React component to the redux store
// It does not modify the component class passed to it
// Instead, it returns a new, connected component class, for you to use.
export default connect(mapStateToProps)(Login);

