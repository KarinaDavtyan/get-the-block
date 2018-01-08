import React from 'react';

class UserPage extends React.Component {

  getBlockList = (data) => {
    const params = {
      method: 'GET',
    }
    const user = window.location.pathname.slice(1);
    fetch(`http://Karina-MacBookPro.local:3000/get_the_blocks${user}`, params)
      .then(blocks => blocks.json())
      .then(blocks => {
        console.log(blocks);
      })
  }


  render () {
    return (
      <div className="UserPage">
        hey UserPage
        <br/>
        <button
          onClick={this.getBlockList}
        />
      </div>
    );
  }
}

export default UserPage;
