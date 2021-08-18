import React, { Component } from 'react';

class Header extends Component {
  render() {
    // console.log("Header组件收到的props是",this.props);
    return (
      <div className="row">
        <h1 className="col-xs-offset-2 col-xs-8">React Router Demo</h1>
      </div>
    );
  }
}

export default Header;