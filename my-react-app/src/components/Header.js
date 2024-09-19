import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <div>
        <div className="jumbotron p-0">
          
        <Link to={'/'}>
          <h1 className="p-4 ml-5">Very cool Materials thing</h1>
        </Link>
        </div>
      </div>
    );
  }
}

export default Header;