import React, { Component } from 'react';
import TabBar from './TabBar';
import HomeBody from './HomeBody';

class Home extends Component {
  render() {
    return (
      <div>
        <h3>我是Home内容</h3>
        <TabBar />
        <HomeBody />
      </div>
    );
  }
}

export default Home;