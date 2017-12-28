import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

class LogIn extends React.Component {
  // login () {
  //   const clientId = 'TzFla1dmVFJhY29qZ01XZEpiMWpBOUxOWTpHaW9OVUxxdjVnWG1QcDViekRuTzNVbWN4RkJJNXJZeE5RMDF3WTlHMWxhV1l1eEdZUQ==';
  //   const redirectURI = 'http://localhost:3000/authorize';
  //   window.location.href =
  //     'https://api.twitter.com/oauth/authorize?response_type=code'
  //     + `&client_id=${clientId}&redirect_uri=${redirectURI}`
  //     + `&scope=photos&state=1234zyx`;//scope
  // }

  async login () {
    fetch('http://Karina-MacBookPro.local:3000/request_token')
      .then(token => token.json())
      .then(token => {
        console.log(token);
        window.location.href = `https://api.twitter.com/oauth/authenticate?oauth_token=${token}`
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
