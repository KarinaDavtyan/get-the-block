import React from 'react';

import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

class UserPage extends React.Component {

  state = {
    user: window.location.pathname.slice(1),
    toBlock: '',
    toFollow: ''
  }


  getBlockList = () => {
    const params = {
      method: 'GET',
    }
    const { user } = this.state;
    fetch(`http://Karina-MacBookPro.local:3000/get_the_blocks/${user}`, params)
      .then(blocks => blocks.json())
      .then(blocks => {
        console.log(blocks);
      })
  }

  block = (username) => {
    const params = {
      method: 'POST',
    }
    const { user } = this.state;
    fetch('http://Karina-MacBookPro.local:3000/block_it/' + user + '/' + username, params)
  }

  follow = (username) => {
    const params = {
      method: 'POST',
    }
    const { user } = this.state;
    fetch('http://Karina-MacBookPro.local:3000/follow_block/' + user + '/' + username, params)
  }

  handleChanges = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  validateToBlock = () => this.block(this.state.toBlock);
  validateToFollow = () => this.follow(this.state.toFollow);

  render () {
    return (
      <div className="UserPage">
        hey UserPage
        <br/>
        <RaisedButton
          onClick={this.getBlockList}
          label='get block list'
        />
        <br/>
        <RaisedButton
          onClick={this.validateToBlock}
          label='block the input user'
        />
        <TextField
          value={this.state.toBlock}
          onChange={this.handleChanges}
          id="toBlock"
          name="toBlock"
          hintText="toBlock"
        />
        <br/>
        <RaisedButton
          onClick={this.validateToFollow}
          label='follow the input user'
        />
        <TextField
          value={this.state.toFollow}
          onChange={this.handleChanges}
          id="toFollow"
          name="toFollow"
          hintText="toFollow"
        />
      </div>
    );
  }
}

export default UserPage;
