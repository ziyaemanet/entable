import React, { Component } from 'react';
import BankStore from '../stores/BankStore';


export default class Donation extends Component {
  constructor() {
    super();
    this.state = {
      banks: BankStore.getBanks(),
    };
  }

  componentWillMount() {
    BankStore.startListening(this._onChange);
  }

  componentWillUnmount() {
    BankStore.stopListening(this._onChange);
  }

  _onChange = () => {
    this.setState({ banks: BankStore.getBanks() });
  }


  render() {
    let { banks } = this.state;
    // let id = this.location.query.id;
    let bankDetail;
    if (banks) {
      bankDetail = banks.filter(bank => {
        return bank.id === id;
      });
    } else {
      bankDetail = <div></div>;
    }
    return (
      <div>
        <DonationHeader bankDetail={bankDetail} />
        <DonationForm bankDetail={bankDetail} />
      </div>
    )
  }
};
