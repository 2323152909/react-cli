import React, { Component } from 'react';
import Aside from '../Aside';
import Main from '../Main';

class Body extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-xs-2 col-xs-offset-2 ">
          <Aside />
        </div>
        <div className="col-xs-6">
          <Main />
        </div>
      </div>
    );
  }
}

export default Body;