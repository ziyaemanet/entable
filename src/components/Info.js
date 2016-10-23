import React, { Component } from 'react';

export default class Info extends Component {
  render() {
    return (
      <div className="contianer-fliud">
        <div className="informationContainer">
          <div className="infoHowItWorks col-sm-6">
            <div className="information">
              <div className="num">
                1
              </div>
              <h6>Look around and find a bank that you're interested in funding</h6>
            </div>
            <div className="information">
              <div className="num">
                2
              </div>
              <h6>Look around and find a bank that you're interested in funding</h6>
            </div>
            <div className="information">
              <div className="num">
                3
              </div>
              <h6>Look around and find a bank that you're interested in funding</h6>
            </div>
            <div className="information">
              <div className="num">
                4
              </div>
              <h6>Look around and find a bank that you're interested in funding</h6>
            </div>
          </div>
          <div className="infoFormContainer col-sm-6">
            <div className="infoTextHeader">
              <h4>Amazing Stories To Your Email</h4>
            </div>
            <form className="infoForm">
              <div className="form-group">
                <label className="sr-only" for="exampleInputEmail3">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail3" placeholder="Email"/>
              </div>
              <div className="form-group">
                <label className="sr-only" for="exampleInputPassword3">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword3" placeholder="Password"/>
              </div>
              <button type="submit" className="btn btn-default btn-block btnHome">Sign in</button>
            </form>
          </div>
        </div>
      </div>
    )
  }
};
