import React, { Component } from 'react';
import MyNavLink from '../MyNavLink';

class Aside extends Component {
  render() {
    return (
      <div className="list-group">
        {/* 在React中靠路由链接实现切换组件--编写路由链接 */}
        <MyNavLink replace to="/home">Home</MyNavLink>
        <MyNavLink replace to="/about">About</MyNavLink>
      </div>
    );
  }
}

export default Aside;