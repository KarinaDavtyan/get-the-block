import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import EntryPage from './containers/EntryPage';
import UserPage from './containers/UserPage';

const Routes = () => (
  <Router>
    <div>
      <Route exact path="/" component={EntryPage}/>
      <Route path="/:username" component={UserPage}/>
    </div>
  </Router>
)

export default Routes;
