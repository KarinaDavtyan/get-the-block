import React, { Component } from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import LogIn from './LogIn';
import cred from './cred';

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
				<div className="background">
					<img src={this.state.imgs.urls.raw} />
				</div>
			)
		}
	}

  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <LogIn />
					{this.renderImage()}
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
