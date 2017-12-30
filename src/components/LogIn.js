import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

class LogIn extends React.Component {

  login () {
    fetch('http://Karina-MacBookPro.local:3000/request_token')
      .then(token => token.json())
      .then(token => {
        window.location.href = `https://api.twitter.com/oauth/authorize?oauth_token=${token}`;
      })
  }

  render () {
    return (
      <div>
        <RaisedButton
          primary
          label="Log in with Twitter"
          onClick={this.login}
        />
      </div>
    );
  }
}

export default LogIn;
