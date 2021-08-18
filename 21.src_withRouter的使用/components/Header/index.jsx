import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'

class Header extends Component {

  goBack = () => {
    this.props.history.goBack(1);
  }

  goForward = () => {
    this.props.history.goForward(1)
  }

  go = () => {
    this.props.history.go(2)
  }

  render() {
    // console.log("Header组件收到的props是",this.props);
    return (
      <div className="row">
        <div className="col-xs-offset-2 col-xs-8">
          <div className="page-header">
            <h2>React Router Demo</h2>
            <button onClick={this.goBack}>回退</button>&nbsp;
            <button onClick={this.goForward}>前进</button>
            <button onClick={this.go}>go</button>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Header);

// withRouter 可以加工一般组件，让一般组件具备路由组件所特有的API
// withRouter 的返回值是一个新组件