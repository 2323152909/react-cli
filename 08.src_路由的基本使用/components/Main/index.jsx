import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import Home from '../Home'
import About from '../About'

class Main extends Component {
  render() {
    return (
      <div className="panel">
        <div className="panel-body">
          {/* 注册路由 */}
          <Route path="/about" component={About} />
          <Route path="/home" component={Home} />
        </div>
      </div>
    );
  }
}

export default Main;