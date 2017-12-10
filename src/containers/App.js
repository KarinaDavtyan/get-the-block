import React, { Component } from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import LogIn from './LogIn';

class App extends Component {

  
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <LogIn />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
