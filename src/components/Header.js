import React, { Component } from 'react';


export default class Header extends Component {

  render() {
    return (
      <header className="jm-main-header" id="section1"> 
        <div className="container">
          <div className="row jm-intro">
            <div className="col-xs-12">
              <div className="jm-header-text">
                <img className="img-responsive img-circle jm-header-img" src="assets/imgs/JoshuaMaddox.jpg" alt="Head Shot of Joshua Maddox" />
                <h1></h1>
                <p></p>
              </div>
            </div>
            <div className="col-sm-4">
              <button className="btn jm-btn-header"><a href="https://drive.google.com/file/d/0BxpDt5ltPm9eNk5lS2UtNktSTlk/view?usp=sharing" target="_blank">RESUME</a></button>
            </div>
            <div className="col-sm-4">
              <button className="btn jm-btn-header"><a href="http://cinderhouse.com.au" target="_blank">DESIGN</a></button>
            </div>{/* --- COL --- */}
            <div className="col-sm-4">
              <button className="btn jm-btn-header"><a href="https://github.com/JoshuaMaddox" target="_blank">GITHUB</a></button>
            </div>{/* --- COL --- */} 
          </div>{/* --- ROW --- */}
        </div>{/* --- CONTAINER --- */}
      </header>
    );
  }
}
