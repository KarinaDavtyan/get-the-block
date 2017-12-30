import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import Dashboard from './containers/Dashboard';
import UserPage from './containers/UserPage';

const Routes = () => (
  <Router>
    <div>
      <Route exact path="/" component={Dashboard}/>
      <Route path="/:username" component={UserPage}/>
    </div>
  </Router>
)

export default Routes;
