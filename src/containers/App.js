import React, { Component } from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import LogIn from './LogIn';
import cred from './cred';

const muiTheme = getMuiTheme({
	palette: {
	    primary1Color: '#1DA1F2',
			// fontFamily: 'Helvetica Neue',
		}
});

class App extends Component {

  constructor() {
		super();
		this.state = {
			imgs: null
		};
	}

	componentDidMount() {
		fetch('https://api.unsplash.com/photos/random/?client_id=' + cred.APP_ID)
			.then(res => res.json())
			.then(data => {
				this.setState({ imgs: data });
				console.log(this.state.imgs.urls.raw);
			})
			.catch(err => {
				console.log('Error happened during fetching!', err);
			});
	}

	renderImage = () => {
		if (this.state.imgs) {
			return (
				<img
          src={this.state.imgs.urls.raw}
          height={window.innerHeight}
          width={window.innerWidth} />
			)
		}
	}

  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div className="App">
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
