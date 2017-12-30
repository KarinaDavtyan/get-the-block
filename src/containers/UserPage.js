import React from 'react';

class UserPage extends React.Component {

  getBlockList () {
    fetch('http://Karina-MacBookPro.local:3000/get_the_blocks')
      .then(blocks => blocks.json())
      .then(blocks => {
        console.log(blocks);
      })
  }

  blockTheUser (data) {
    fetch('http://Karina-MacBookPro.local:3000/block_it',
      {
        method: 'POST',
        body: JSON.stringify(data)
      })
  }

  render () {
    return (
      <div className="UserPage">
        hey UserPage
        <button
          primary
          onClick={this.getBlockList}
        />
        <br/>
        <button
          primary
          onClick={this.blockTheUser('arolet')}
        />
      </div>
    );
  }
}

export default UserPage;
