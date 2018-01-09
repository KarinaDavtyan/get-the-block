import React from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import Router from '../Router';

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: '#1DA1F2',
  }
});

class App extends React.Component {

  render () {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <Router />
      </MuiThemeProvider>
    );
  }

}

export default App;
