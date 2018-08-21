import React from 'react'
import { NavLink } from 'react-router-dom'
import classnames from 'classnames'
import { connect } from 'react-redux'

class Navbar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isToggled: false
    }

    this._toggleHandle = this._toggleHandle.bind(this)
    this._blurHandle = this._blurHandle.bind(this)
  }

  _toggleHandle() {
    this.setState(prevState => ({
      isToggled: !prevState.isToggled
    }))
  }

  _blurHandle() {
    if (this.state.isToggled) {
      this.setState({ isToggled: false })
    }
  }

  componentWillUpdate() {
    this._blurHandle()
  }

  login() {
    return (
      <div className="navbar-end">
        <div className="navbar-item">
          <div className="field is-grouped">
            <p className="control">
              <a
                className="bd-tw-button button"
                data-social-network="Google"
                data-social-action="google"
                data-social-target="http://localhost:5000"
                href="api/auth/google"
              >
                <span className="icon">
                  <i className="fab fa-google" />
                </span>
                <span>Login</span>
              </a>
            </p>
          </div>
        </div>
      </div>
    )
  }

  logout() {
    return (
      <div className="navbar-end">
        <div className="navbar-item">
          <div className="field is-grouped">
            <p className="control">
              <a
                className="bd-tw-button button"
                data-social-network="Google"
                data-social-action="google"
                data-social-target="http://localhost:5000"
                href="api/logout"
              >
                <span>Logout</span>
              </a>
            </p>
          </div>
        </div>
      </div>
    )
  }

  render() {
    const { isToggled } = this.state

    if (typeof window !== 'undefined') {
      window.onclick = event => {
        const css = '.navbar-burger, .navbar-brand'
        const matches = event.target.matches
          ? event.target.matches(css)
          : event.target.msMatchesSelector(css)
        if (!matches) {
          this._blurHandle()
        }
      }
    }

    return (
      <div>
        <nav
          className="navbar is-fixed-top has-background-light is-transparent"
          role="navigation"
          aria-label="main navigation"
        >
          <div className="container">
            <div className="navbar-brand">
              <a className="navbar-item">
                <img
                  src="https://bulma.io/images/bulma-logo.png"
                  alt="Bulma: a modern CSS framework based on Flexbox"
                  width="112"
                  height="28"
                />
              </a>
              <a
                role="button"
                className={classnames('navbar-burger', {
                  'is-active': isToggled
                })}
                ref={buttonDOM => {
                  this.buttonDOM = buttonDOM
                }}
                data-target="navMenu"
                aria-label="menu"
                aria-expanded="false"
                onClick={this._toggleHandle}
              >
                <span aria-hidden="true" />
                <span aria-hidden="true" />
                <span aria-hidden="true" />
              </a>
            </div>
            <div
              className={classnames('navbar-menu', { 'is-active': isToggled })}
            >
              <div className="navbar-start">
                <NavLink className="navbar-item" to="/">
                  Home
                </NavLink>
                <NavLink className="navbar-item" to="/about">
                  About
                </NavLink>
                <NavLink className="navbar-item" to="/admins">
                  Admins
                </NavLink>
                <NavLink className="navbar-item" to="/users">
                  Users
                </NavLink>
              </div>
              {this.props.auth ? this.logout() : this.login()}
            </div>
          </div>
        </nav>
      </div>
    )
  }
}

function mapStatetoProps({ auth }) {
  return { auth }
}

export default connect(mapStatetoProps)(Navbar)
