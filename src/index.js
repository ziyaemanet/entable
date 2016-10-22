import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import Navbar from './components/Navbar';
import Home from './components/Home';
import BankDetail from './components/BankDetail';
import Donation from './components/Donation';

render(
  <Router history={browserHistory}>
    <Route path="/" component={Navbar}>
      <IndexRoute component={Home} />
      <Route path="bank" component={BankDetail} />
      <Route path="donation" component={Donation} />
    </Route>
  </Router>,
  document.getElementById('root')
);
