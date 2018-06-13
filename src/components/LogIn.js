import React from 'react';
import Button from '@material-ui/core/Button';

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
        <Button
          primary
          onClick={this.login}
        >
          Log in with Twitter
        </Button>
      </div>
    );
  }
}

export default LogIn;
