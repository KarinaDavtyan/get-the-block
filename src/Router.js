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

const UserPageParams = ({ match }) => (
  <div>
    <h3>ID: {match.params.username}</h3>
  </div>
)

export default Routes;
