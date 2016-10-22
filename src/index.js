import React from 'react';
import {render} from 'react-dom';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';

import Layout from './components/Layout';
import Landing from './components/Landing';
// import newComponent from './components/newRoute';

import './stores/EntableStore';

render(
  <div>
    <div id="background"></div>
    <div id="content">
      <Router history={browserHistory}>
        <Route path="/" component={Layout}>
          <IndexRoute component={Landing} />
          {/* <Route path="/newRoute" component={newComponent} /> */}
        </Route>
      </Router>
    </div>
  </div>,
  document.getElementById("root")
);
