import React, { Component } from 'react';
// import BankStore from '../stores/BankStore';
import moment from 'moment'
import Footer from './Footer'


export default class Donation extends Component {
  constructor() {
    super();
    this.state = {
      // banks: BankStore.getBanks(),
    };
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

    let bankName = "Women's Bank of Anlos"
    return (
      <div>
        <div className=" donationContainer">
          <div className="bankImgBanner" style={mainBankImage}>
            <div className="donationBankName">
              <h2>{bankName}</h2>
              <h5>96% of your donation goes directly to the owners of this bank.<br />4% covers USD to Bitcoin to Mpesa transactions fees of third party money handlers.</h5>
            </div>
            <form className="infoForm">
              <div className="form-group">
                <label className="sr-only" for="exampleInputEmail3">Supporter Email</label>
                <input type="email" className="form-control" id="exampleInputEmail3" placeholder="Supporter Email"/>
              </div>
              <div className="form-group">
                <label className="sr-only" for="exampleInputPassword3">Bit Coin Address</label>
                <input type="password" className="form-control" id="exampleInputPassword3" placeholder="Bit Coin Address"/>
              </div>
              <div className="form-group">
                <label className="sr-only" for="exampleInputPassword3">Supporter's Name</label>
                <input type="password" className="form-control" id="exampleInputPassword3" placeholder="Supporter's Name"/>
              </div>
              <div className="form-group">
                <label className="sr-only" for="exampleInputPassword3">Optional Message to Bankers</label>
                <input type="password" className="form-control" id="exampleInputPassword3" placeholder="Optional Message to Bankers"/>
              </div>
              <button type="submit" className="btn btn-default btn-block btnFormBottom">Send Payment</button>
            </form>
          </div>
          <div className="donationOptions">
            <div className="giftBtnContainer">
              <button className="giftBtn">Send As A Gift</button>
            </div>
            <div className="noBtnCoinsContainer">
              <button className="noBTcoins">I Don't Have Bitcoin</button>
            </div>
          </div>
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
