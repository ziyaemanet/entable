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
      let fakeTimeStampDelete = moment().format('lll');



      let dummy = [

          {Name: 'Bank of Sauri',
          Country: 'Kenya',
          Description1: 'Located in western Kenya, the Sauri cluster lies in Yala Division, Siaya District, Nyanza Province.',
          Description2: 'In Sauri, almost 80% of the population ...',
          // Description2: 'In Sauri, almost 80% of the population earned less than $1 per day, and 59% of children under five exhibited stunting, a sign of chronic malnutrition.',
          Description3: 'The bank aims to alleviate these issues and develop the local economy.',
          Images: ['sauri-kenya-feature.jpg','http://millenniumvillages.org/wp-content/uploads/2013/02/sauri-kenya-feature.jpg'],
          Starting: '$350',
          Current: '$1050'},

          {Name: 'Dertu Village Bank',
          Country: 'Kenya',
          Description1: 'The village of Dertu is located in northeastern Kenya, approximately 140km from the border with Somalia.',
          Description2: 'The village is characterized ...',
          // Description2: 'The village is characterized by high poverty levels and for years there has been a high level of dependency on food aid.',
          Description3: 'The bank hopes to reduce poverty and develop education in the area.',
          Images: ['dertu-kenya-feature.jpg','http://millenniumvillages.org/wp-content/uploads/2013/02/dertu-kenya-feature.jpg'],
          Starting: '$425',
          Current: '$870'},

          {Name: 'Koraro Bank',
          Country: 'Ethiopia',
          Description1: 'The Koraro cluster is located in the Hawzien district in northern Ethiopia.',
          Description2: 'Koraro is located in one of the poorest regions of Ethiopia, suffers ...',
          // Description2: 'Koraro is located in one of the poorest regions of Ethiopia, suffers from a severely degraded soil, high malaria and maternal mortality rates, lack of classrooms, unsafe drinking water, and extremely poor infrastructure.',
          Description3: 'The first priority of the bank is to focus on basic health and sanitation isssues.',
          Images: ['koraro-ethiopia-feature.jpg','http://millenniumvillages.org/wp-content/uploads/2013/02/koraro-ethiopia-feature.jpg'],
          Starting: '$260',
          Current: '$800'},

          {Name: 'Bank of Bonsaaso',
          Country: 'Ghana',
          Description1: 'Bonsaaso is located in the Amansie-West District of the Ashanti Region of Ghana.',
          Description2: 'Getting goods in and out of the isolated communities can be ...',
          // Description2: 'Getting goods in and out of the isolated communities can be arduous due to travel on uneven dirt roads that were carved by gold mining and lumber companies years back.',
          Description3: 'The bank has been set up to focus initially on vital local infrastructure',
          Images: ['bonsaaso-ghana-feature.jpg','http://millenniumvillages.org/wp-content/uploads/2013/02/bonsaaso-ghana-feature.jpg'],
          Starting: '$100',
          Current: '$550'},

          {Name: 'Mbola Village Bank',
          Country: 'Tanzania',
          Description1: 'The Mbola cluster is located in the Uyui district in mid-western Tanzania.',
          Description2: 'Mbola faces a high rate of environmental degradation resulting from ...',
          // Description2: 'Mbola faces a high rate of environmental degradation resulting from poor crop management practices, declining agricultural production and destruction of the Miombo woodlands for fuel wood used in the tobacco industry.',
          Description3: 'Mbola Village Bank woul like to work on restoring the local environment and moving to a more sustainable economy.',
          Images: ['mbola-tanzania-feature.jpg','http://millenniumvillages.org/wp-content/uploads/2013/02/mbola-tanzania-feature.jpg'],
          Starting: '$600',
          Current: '$1350'},

          {Name: 'Ruhiira Bank',
          Country: 'Uganda',
          Description1: 'The Ruhiira cluster lies in southwestern Uganda and is 40km from the nearest city, Mbarara.',
          Description2: 'High population density and continued growth rates ...',
          // Description2: 'High population density and continued growth rates have contributed to land shortages and degradation. The area is also well known for having the highest tuberculosis prevalence in southwestern Uganda.',
          Description3: 'We want to provide housing and reliable medical resources to the local community',
          Images: ['ruhiira-uganda-feature.jpg','http://millenniumvillages.org/wp-content/uploads/2013/02/ruhiira-uganda-feature.jpg'],
          Starting: '$175',
          Current: '$960'},

        ];
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

    //
    // let bankDetailArr = [
    //   { member: '17148750963', date: '2016-02-21', borrowed: '0.00', payedIn: '12.78', description: 'Repaid Loan' },
    //   { member: '19199601124', date: '2016-02-21', borrowed: '0.00', payedIn: '19.00', description: 'Repaid Loan' },
    //   { member: '19259973408', date: '2016-02-21', borrowed: '16.75', payedIn: '00.00', description: 'For School Supplies' },
    //   { member: '19253534139', date: '2016-02-21', borrowed: '25.80', payedIn: '00.00', description: 'Medicine' },
    //   { member: '14802745839', date: '2016-02-21', borrowed: '0.00', payedIn: '12.78', description: 'Repaid Loan' }];

      let transactions = [
        { sender: '17148750963', date: '2016-02-21', amount: '12.78', description: 'Repaid Loan' },
        { sender: '19199601124', date: '2016-02-21', amount: '19.00', description: 'Repaid Loan' },
        { sender: '19259973408', date: '2016-02-21', amount: '-16.75', description: 'For School Supplies' },
        { sender: '19253534139', date: '2016-02-21', amount: '-25.80', description: 'Medicine' },
        { sender: '14802745839', date: '2016-02-21', amount: '12.78', description: 'Repaid Loan' }];


    let {amountNumber} = this.props.location.query;
    if(!amountNumber) amountNumber = 0;
    let starting_Amount = 0;
    let messageAmount = 0;
    let rows;
    if (transactions) {
      rows = transactions.map((bankDetail, index) => {
        let membersInfo = {'17148750963': 'Ziya Emanet',
     '19199601124': 'Donovan Moore',
     '19259973408': 'Richard Mands',
     '19253534139': 'Joshua Maddox',
     '14802745839': 'Holly Zhou'};
        let borrowed = 0, payedIn = 0;
        let { sender, date, amount, description } = bankDetail;
        if(Number(amount) < 0){
          console.log('amount:', amount)
          borrowed = amount * (-1);
          messageAmount += Number(amount);
        } else {
          payedIn = amount;
          messageAmount += Number(amount);
        }
        starting_Amount = Number(amountNumber) + messageAmount;
        return (
          <tr key={index}>
            <td>{membersInfo[sender]}</td>
            <td>{date}</td>
            <td>{borrowed}</td>
            <td>{payedIn}</td>
            <td>{description}</td>
          </tr>
        )
      })
    } else {
      rows = <tr></tr>;
    }





    return (
      <div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6 imgContainer">
              <div className="groupImg">
                <img src={dummy[5].Images[0]} width="600px"/>
              </div>
            </div>
            <div className="col-md-6 groupInfo">
              <div className='groupDesc'>
                <div className="groupName">
                  <h3>{dummy[5].Name}</h3>
                </div>
                <div className="groupDesc">
                  <h4>{dummy[5].Name} Details and Information: </h4>
                  <p>{dummy[5].Description1}</p>
                  <p>{dummy[5].Description2}</p>
                  <p>{dummy[5].Description3}</p>
                </div>
                <div className="moniesDisplay">
                  <div className="startingTotal">
                    <h6>Starting Amount:</h6>
                    <h4>${amountNumber}</h4>
                  </div>
                  <div className="currentTotal">
                    <h6>Currently Held:</h6>
                    <h4>${starting_Amount}</h4>
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
                {rows}
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
