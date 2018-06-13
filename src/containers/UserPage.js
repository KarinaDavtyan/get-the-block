import React from 'react';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

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
      <div className='UserPage'>
        hey UserPage
        <br/>
        <Button
          onClick={this.getBlockList}
        >
          get block list
        </Button>
        <br/>
        <Button
          onClick={this.validateToBlock}
        >
          block the input user
        </Button>
        <TextField
          value={this.state.toBlock}
          onChange={this.handleChanges}
          id='toBlock'
          name='toBlock'
          helperText='toBlock'
        />
        <br/>
        <Button
          onClick={this.validateToFollow}
        >
          follow the input user
        </Button>
        <TextField
          value={this.state.toFollow}
          onChange={this.handleChanges}
          id='toFollow'
          name='toFollow'
          helperText='toFollow'
        />
      </div>
    );
  }
}

export default UserPage;
