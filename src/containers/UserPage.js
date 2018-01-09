import React from 'react';

import RaisedButton from 'material-ui/RaisedButton';

class UserPage extends React.Component {

  state = {
    user: window.location.pathname.slice(1),
    toBlock: '',
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

  handleChanges = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  validate = () => this.block(this.state.toBlock);

  render () {
    return (
      <div className="UserPage">
        hey UserPage
        <br/>
        <RaisedButton
          onClick={this.getBlockList}
          label='get block list'
        />
        <RaisedButton
          onClick={this.validate}
          label='block the input user'
        />
        <input
          value={this.state.toBlock}
          onChange={this.handleChanges}
          id="toBlock"
          name="toBlock"
        />
      </div>
    );
  }
}

export default UserPage;
