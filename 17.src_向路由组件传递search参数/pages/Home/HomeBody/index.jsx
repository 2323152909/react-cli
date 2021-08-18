import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom'
import News from '../News'
import Message from '../Message';

class HomeBody extends Component {
  render() {
    return (
      <div>
        {/* 路由注册 */}
        <Switch>
          <Route path="/home/news" component={News} />
          <Route path="/home/message" component={Message} />
          <Redirect to="/home/news"/>
        </Switch>
      </div>
    );
  }
}

export default HomeBody;