import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import Navbar from './components/Navbar';
import Home from './components/Home';
import BankDetail from './components/BankDetail';
import BankDetail2 from './components/BankDetail2';
import BankDetail3 from './components/BankDetail3';
import BankDetail4 from './components/BankDetail4';
import BankDetail5 from './components/BankDetail5';
import BankDetail6 from './components/BankDetail6';
import BankDetail7 from './components/BankDetail7';
import Donation from './components/Donation';
import Donation2 from './components/Donation2';
import Donation3 from './components/Donation3';
import Donation4 from './components/Donation4';
import Donation5 from './components/Donation5';
import Donation6 from './components/Donation6';

import API from './API';
import BankStore from './stores/BankStore';

render(
  <Router history={browserHistory}>
    <Route path="/" component={Navbar}>
      <IndexRoute component={Home} />
      <Route path="bank" component={BankDetail} />
      <Route path="bank2" component={BankDetail2} />
      <Route path="bank3" component={BankDetail3} />
      <Route path="bank4" component={BankDetail4} />
      <Route path="bank5" component={BankDetail5} />
      <Route path="bank6" component={BankDetail6} />
      <Route path="bank7" component={BankDetail7} />
      <Route path="donation" component={Donation} />
      <Route path="donation2" component={Donation2} />
      <Route path="donation3" component={Donation3} />
      <Route path="donation4" component={Donation4} />
      <Route path="donation5" component={Donation5} />
      <Route path="donation6" component={Donation6} />
    </Route>
  </Router>,
  document.getElementById('root')
);
