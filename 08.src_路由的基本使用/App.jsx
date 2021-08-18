import React, { Component } from 'react';
import Aside from './components/Aside';
import Main from './components/Main'

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <h1 className="col-xs-offset-2 col-xs-8">React Router Demo</h1>
        </div>
        <div className="row">
          <div className="col-xs-2 col-xs-offset-2 ">
            <Aside />
          </div>
          <div className="col-xs-6">
            <Main />
          </div>
        </div>
      </div>
    );
  }
}

export default App;