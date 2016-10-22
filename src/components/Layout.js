import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Layout extends Component {

  render() {
    return (
      <div className="container">
        {/* <div id='page-title'>
          Animal Shelter
        </div> */}
        <nav className="nav navbar-inverse navbar-fixed-top">
          <div className="container">
            <Link to="/" className="btn btn-default navbar-btn">Home</Link>
            {/* <Link to='/animals' {...PROPS}>Animals</Link>
              <Link to='/owners' {...PROPS}>Owners</Link>
              <Link to='/newowner' {...PROPS}>New Owner</Link>
            <Link to='/newanimal' {...PROPS}>New Animal</Link> */}
          </div>
        </nav>
        <div id="main">{this.props.children}</div>
      </div>
    );
  }
}
