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
              <h6>Women in underserved communities send an SMS to open a new bank and become 'bankers'</h6>
            </div>
            <div className="information">
              <div className="num">
                2
              </div>
              <h6>Visitors browse banks, follow updates and donate directly to bankers using bitpesa to m-pesa</h6>
              <h6>Using Tropo's SMS API they can submit transaction and status updates to  </h6>
            </div>
            <div className="information">
              <div className="num">
                3
              </div>
              <h6>Using Tropo's SMS API they can submit transaction and status updates to  </h6>
            </div>
            <div className="information">
              <div className="num">
                4
              </div>
              <h6>Bankers gather once per month to borrow, lend and update their banks at a time of their choosing</h6>
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
