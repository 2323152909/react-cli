import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

class Aside extends Component {
  render() {
    return (
      <div className="list-group">
        {/* 在React中靠路由链接实现切换组件--编写路由链接 */}
        <NavLink activeClassName="lhd-active" className="list-group-item" to="/about">About</NavLink>
        <NavLink activeClassName="lhd-active" className="list-group-item" to="/home">Home</NavLink>
      </div>
    );
  }
}

export default Aside;