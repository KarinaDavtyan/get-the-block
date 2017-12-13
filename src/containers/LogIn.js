import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class LogIn extends Component {
  // login () {
  //   const clientId = 'TzFla1dmVFJhY29qZ01XZEpiMWpBOUxOWTpHaW9OVUxxdjVnWG1QcDViekRuTzNVbWN4RkJJNXJZeE5RMDF3WTlHMWxhV1l1eEdZUQ==';
  //   const redirectURI = 'http://localhost:3000/authorize';
  //   window.location.href =
  //     'https://api.twitter.com/oauth/authorize?response_type=code'
  //     + `&client_id=${clientId}&redirect_uri=${redirectURI}`
  //     + `&scope=photos&state=1234zyx`;//scope
  // }
//   login () {
//     fetch('https://api.twitter.com/oauth/request_token') {
//       method: "post",
//   headers: {
//     'Accept': 'application/json',
//     'Content-Type': 'application/json'
//   },
//
//   //make sure to serialize your JSON body
//   body: JSON.stringify({
//     name: myName,
//     password: myPassword
//   })
// })
// .then( (response) => {
//    //do something awesome that makes the world a better place
// });
//     }
  // }

  render() {
    return (
      <div>
        <RaisedButton
          primary
          label="Log in with Twitter"
          // onClick={this.login}
        />
      </div>
    );
  }
}

export default LogIn;
