import React from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import LogIn from '../components/LogIn';
import cred from '../cred';

const muiTheme = getMuiTheme({
	palette: {
	    primary1Color: '#1DA1F2',
			// fontFamily: 'Helvetica Neue',
		}
});

class App extends React.Component {

  constructor() {
		super();
		this.state = {
			imgs: null
		};
	}

	// componentDidMount() {
	// 	fetch('https://api.unsplash.com/photos/random/?client_id=' + cred.APP_ID)
	// 		.then(res => res.json())
	// 		.then(data => {
	// 			this.setState({ imgs: data });
	// 			console.log(this.state.imgs);
	// 		})
	// 		.catch(err => {
	// 			console.log('Error happened during fetching!', err);
	// 		});
	// }

	renderImage = () => {
		// if (this.state.imgs) {
			return (
				<img
          src={'https://images.unsplash.com/photo-1508861147305-f48512b7a29b?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&s=49b1f0e1d34bb69d858c6ba5c7a9326d'}
				 />
			)
		// }
	}

  render() {
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
