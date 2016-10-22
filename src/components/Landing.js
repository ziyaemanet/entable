import React, { Component } from 'react';
import {Link} from 'react-router';

export default class Landing extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <br />
        <h1>@LANDING</h1>
        <div className="row">
          <h2 className="text-center">Welcome to the entable.</h2>
        </div>
      </div>
    );
  }
}
