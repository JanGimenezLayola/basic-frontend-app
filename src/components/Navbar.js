import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
  render() {  
    return (
      <div>
        <p>username: Jackito</p>
        <p>Logout</p>
        <Link to='/login'>Login</Link>
        <Link to='/signup'>Signup</Link>
      </div>
    )
  }
}

export default Navbar;