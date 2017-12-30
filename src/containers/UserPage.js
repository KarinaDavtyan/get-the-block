import React from 'react';

class UserPage extends React.Component {

  getBlockList () {
    fetch('http://Karina-MacBookPro.local:3000/get_the_blocks')
      .then(blocks => blocks.json())
      .then(blocks => {
        console.log(blocks);
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
      </div>
    );
  }
}

export default UserPage;
