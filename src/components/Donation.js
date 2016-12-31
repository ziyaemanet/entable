import React, { Component } from 'react';
import BankStore from '../stores/BankStore';
import moment from 'moment'
import Footer from './Footer'
import { browserHistory } from 'react-router';
import API from '../API';

export default class Donation extends Component {
  constructor() {
    super();
    this.state = {
      banks: BankStore.getBanks(),
    };
    this._onSubmit = this._onSubmit.bind(this);
  }

  componentDidMount() {
    window.scroll(0, 0);
  }

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

  _onSubmit(e) {
    e.preventDefault();
    let amount = this.refs.amount.value;
    const { banks } = this.state;
    console.log('banks: ', banks);
    API.fund({ details: { amount, description: 'Donation', sender: 'Donor', date: moment().format('MM/DD/YY') }, chair: banks[0].chair });
    browserHistory.push({ pathname: '/bank' });
  }


  render() {
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
        {/* <DonationHeader bankDetail={bankDetail} />
        <DonationForm bankDetail={bankDetail} /> */}

    let mainBankImage = {
      backgroundImage: 'url(enable-women-to-be-the-boss.jpg)',
    }

    let fakeTimeStampDelete = moment().format('lll')

    let bankName = "Ruhiira Bank"
    return (
      <div>
        <div className=" donationContainer">
          <div className="bankImgBanner" style={mainBankImage}>
            <div className="donationBankName">
              <h2>{bankName}</h2>
              <h5>96% of your donation goes directly to the owners of this bank.<br />4% covers USD to Bitcoin to Mpesa transactions fees of third party money handlers.</h5>
            </div>
            <form className="infoForm" onSubmit={this._onSubmit}>
              <div className="form-group">
                <label className="sr-only" htmlFor="exampleInputPassword3">Supporter's Name</label>
                <input type="text" className="form-control" id="exampleInputPassword3" placeholder="first name last name" />
              </div>
              <div className="form-group">
                <label className="sr-only" htmlFor="exampleInputEmail3">Supporter Email</label>
                <input type="email" className="form-control" id="exampleInputEmail3" placeholder="email address" />
              </div>
              <div className="form-group">
                <label className="sr-only" htmlFor="exampleInputPassword3">Card Number</label>
                <input type="text" className="form-control" id="exampleInputPassword3" placeholder="16 digit card number" />
              </div>

              <div className="form-group">
                <div className="form-inline cardDetails">
                  <input type="text" className="form-control cardDetailsInput" placeholder="expiration month" />
                  <input type="text" className="form-control cardDetailsInput" placeholder="expiration year" />
                  <input type="text" className="form-control cardDetailsInput" placeholder="CVV2 / CVC2" />
                </div>
              </div>

              <div className="form-group">
                <label className="sr-only" htmlFor="exampleInputPassword3">Amount</label>
                <input type="text" className="form-control" id="exampleInputPassword3" placeholder="donation amount" ref="amount" />
              </div>
              <button type="submit" className="btn btn-default btn-block btnFormBottom">Send Funds To Bank</button>
            </form>
          </div>
          {/* <div className="donationOptions">
            <div className="giftBtnContainer">
            <button className="giftBtn">Send As A Gift</button>
            </div>
            <div className="noBtnCoinsContainer">
            <button className="noBTcoins">I Don't Have Bitcoin</button>
            </div>
          </div> */}
          <div className="transactionHeaderDonation">
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
        <div>
          <Footer />
        </div>
      </div>
    )
  }
};
