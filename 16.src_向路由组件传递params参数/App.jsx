import React, { Component } from 'react';
import Header from './components/Header';
import Body from './components/Body';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <Body />
      </div>
    );
  }
}

export default App;