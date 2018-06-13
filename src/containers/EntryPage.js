import React from 'react';
import Button from '@material-ui/core/Button';

import './App.css';

class EntryPage extends React.Component {

  login () {
    fetch('http://Karina-MacBookPro.local:3000/request_token')
      .then(token => token.json())
      .then(token => {
        window.location.href = `https://api.twitter.com/oauth/authorize?oauth_token=${token}`;
      })
  }

  render () {
    return (
      <div className='entryPage'>
        <div className='logIn'>
          <Button
            variant='contained'
            size='large'
            onClick={this.login}
          >
            Log in with Twitter
          </Button>
        </div>
      </div>
    );
  }

}

export default EntryPage;
