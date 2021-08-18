import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Aside extends Component {
  render() {
    return (
      <div className="list-group">
        {/* 在React中靠路由链接实现切换组件--编写路由链接 */}
        <Link className="list-group-item" to="/about">About</Link>
        <Link className="list-group-item" to="/home">Home</Link>
      </div>
    );
  }
}

export default Aside;