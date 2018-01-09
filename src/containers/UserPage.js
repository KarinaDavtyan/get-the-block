import React from 'react';

class UserPage extends React.Component {

  state = {
    toBlock: '',
  }

  getBlockList = () => {
    const params = {
      method: 'GET',
    }
    const user = window.location.pathname.slice(1);
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
    const user = window.location.pathname.slice(1);
    console.log(user, username);
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
        <button
          onClick={this.getBlockList}
        />
        <button
          onClick={this.validate}
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
