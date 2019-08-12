import React, { Component } from 'react';

import authService from '../services/auth-service'

export const AuthContext = React.createContext();

class AuthProvider extends Component {

  state = {
    isLoggedIn: false,
    user: {},
  }

  userSignUp = (user) => {
    return authService.signup(user)
    .then((user) => {
      this.setState({
        isLoggedIn: true,
        user
      })
    })
  }

  userLogin = (user) => {
    return authService.login(user)
    .then((user) => {
      this.setState({
        isLoggedIn: true,
        user
      })
    })
  }

  userLogout = () => {
    return authService.logout()
    .then(() => {
      this.setState({
        isLoggedIn: false,
        user: {}
      })
    })
    .catch((error) => {
      this.setState({
        isLoggedIn: false,
        user: {}
      })
    })
  }

  componentDidMount() {
    authService.me()
    .then((user) => {
      this.setState({
        user,
        isLoggedIn: true
      })
    })
  }

  render() {
    const { user, isLoggedIn } = this.state;
    return (
      <AuthContext.Provider value={
        {
          user,
          isLoggedIn,
          login: this.userLogin,
          signup: this.userSignUp,
          logout: this.userLogout
        }
      }> 
        {this.props.children}
      </AuthContext.Provider>
    )
  }
}

export default AuthProvider;
