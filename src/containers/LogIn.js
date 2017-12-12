import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class LogIn extends Component {
  login () {
    const clientId = 'O1ekWfTRacojgMWdJb1jA9LNY';
    const redirectURI = 'http://localhost:3000/authorize';
    window.location.href =
      'https://api.twitter.com/oauth/authorize?response_type=code'
      + `&client_id=${clientId}&redirect_uri=${redirectURI}`
      + ``;
  }

  render() {
    return (
      <div>
        <RaisedButton
          primary
          label="Log in with Twitter"
          fullWidth={true}
          // onClick={this.login}
        />
      </div>
    );
  }
}

export default LogIn;
