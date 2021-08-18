import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import Home from '../../pages/Home'
import About from '../../pages/About'

class Main extends Component {
  render() {
    return (
      <div className="panel">
        <div className="panel-body">
          {/* 注册路由 */}
          <Switch>
            <Route path="/about" component={About} />
            <Route path="/home" component={Home} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default Main;