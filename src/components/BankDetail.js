import React, { Component } from 'react';
// import BankStore from '../stores/BankStore';
import moment from 'moment'
import Footer from './Footer'


export default class BankDetail extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     banks: BankStore.getBanks(),
  //   };
  // }
  //
  // componentWillMount() {
  //   BankStore.startListening(this._onChange);
  // }
  //
  // componentWillUnmount() {
  //   BankStore.stopListening(this._onChange);
  // }
  //
  // _onChange = () => {
  //   this.setState({ banks: BankStore.getBanks() });
  // }


  render() {
      let fakeTimeStampDelete = moment().format('lll')
    // let { banks } = this.state;
    // // let id = this.location.query.id;
    // let bankDetail;
    // if (banks) {
    //   bankDetail = banks.filter(bank => {
    //     return bank.id === id;
    //   });
    // } else {
    //   bankDetail = <div></div>;
    // }
        {/* <BankData bankDetail={bankDetail} />
          <FinancialHistory financialHistory={bankDetail.history} />
        <Timeline timeline={bankDetail.timeline} /> */}
    return (
      <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6 imgContainer">
            <div className="groupImg">
              <img src="enable-women-to-be-the-boss.jpg" width="600px"/>
            </div>
          </div>
          <div className="col-md-6 groupInfo">
            <div className='groupDesc'>
              <div className="groupName">
                <h3>Bank Name Goes Here</h3>
              </div>
              <div className="groupDesc">
                <h4>Bank Name Details and Information: </h4>
                <p>Some text explaining what the bank is and who it supports, perhpas some sucess stories? Not really sure Richard. Your English skills are currently in demand.</p> 
                <p>Some text explaining what the bank is and who it supports, perhpas some sucess stories? Not really sure Richard.</p> 
                <p>Praesent ex nulla, lacinia non dolor in, rutrum feugiat mi. Curabitur vel ex tincidunt neque pellentesque finibus et ac metus. Vestibulum gravida.</p> 
              </div>
              <div className="moniesDisplay">
                <div className="startingTotal">
                  <h6>Starting Amount:</h6>
                  <h4>$575.00</h4>
                </div>
                <div className="currentTotal">
                  <h6>Currently Held:</h6>
                  <h4>$875.00</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="groupDonateBtn">
          <button className="donateBtn">Add Funds to This Bank</button>
        </div>
        <div className="tableContainer">
          <table className="table table-striped">
            <thead>
              <tr> 
                <th>Bank Member</th>
                <th>Date</th>
                <th>Borrowed Out</th>
                <th>Payed In</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Jill</td>
                <td>2016-02-21</td>
                <td>0.00</td>
                <td>12.78</td>
                <td>Repaid Loan</td>
              </tr>
              <tr>
                <td>Aide</td>
                <td>2016-02-21</td>
                <td>0.00</td>
                <td>19.00</td>
                <td>Repaid Loan</td>
              </tr>
              <tr>
                <td>Sarah</td>
                <td>2016-02-21</td>
                <td>16.75</td>
                <td>00.00</td>
                <td>For School Supplies</td>
              </tr>
              <tr>
                <td>Anile</td>
                <td>2016-02-21</td>
                <td>25.80</td>
                <td>0.00</td>
                <td>Medicine</td>
              </tr>
              <tr>
                <td>Betrolis</td>
                <td>2016-02-21</td>
                <td>0.00</td>
                <td>12.78</td>
                <td>Repaid Loan</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="transactionHeader">
          <h3>Bank History & Notes to Sponsors</h3>
        </div>
        <div className="transactionHistoryContainer text-center">
          <div className="transactionItem">
            <h6></h6>
            <p><span className="timeStamp">{fakeTimeStampDelete}</span> <span className="bankerName">  Betty Hascal - <i>Bank Manager</i></span></p>  
            <p>Sarah's son started school with new books.</p>
            <hr className="bankHistoryHr"/>
          </div>
          <div className="transactionItem">
            <h6></h6>
            <p><span className="timeStamp">{fakeTimeStampDelete}</span> <span className="bankerName">  Betty Hascal - <i>Bank Manager</i></span></p>  
            <p>Anile's farm bought breeding pigs.</p>
            <hr className="bankHistoryHr"/>
          </div>
          <div className="transactionItem">
            <h6></h6>
            <p><span className="timeStamp">{fakeTimeStampDelete}</span> <span className="bankerName">  Betty Hascal - <i>Bank Manager</i></span></p>  
            <p>Aide bought supplies to increase productivity of chicken operation.</p>
            <hr className="bankHistoryHr"/>
          </div>
          <div className="transactionItem">
            <h6></h6>
            <p><span className="timeStamp">{fakeTimeStampDelete}</span> <span className="bankerName">  Betty Hascal - <i>Bank Manager</i></span></p>  
            <p>Sarah's son started school with new books.</p>
            <hr className="bankHistoryHr"/>
          </div>
        </div>
      </div>
        <Footer />
      </div>

    )
  }
};
