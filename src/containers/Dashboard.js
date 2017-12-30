import React from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import LogIn from '../components/LogIn';

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: '#1DA1F2',
  }
});

class App extends React.Component {

  renderImage = () => {
    return (
      <img
        src={'https://images.unsplash.com/photo-1508861147305-f48512b7a29b?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&s=49b1f0e1d34bb69d858c6ba5c7a9326d'}
      />
    )
  }

  render () {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div className="Main">
          <div className="LogIn">
            <LogIn />
          </div>
          <div className="background">
            {this.renderImage()}
          </div>
        </div>
      </MuiThemeProvider>
    );
  }

}

export default App;
