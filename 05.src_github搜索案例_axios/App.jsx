import React, { Component } from 'react';
import Search from './components/Search'
import List from './components/List'

class App extends Component {

  // 初始化状态
  state = {
    users:[], // users初始值为数组
    isFirst:true, //是否为第一次打开页面
    isLoading:false, // 标识是否处于加载中
    error:'' //存储请求相关的错误信息
  }

  // 更新APP的state
  updateAppState = (stateObj) => {
    console.log(stateObj);
    // 获取原来的users
    // 更新状态
    this.setState({
      ...stateObj
    })
  }

  render() {
    return (
      <div className="container">
        <Search updateAppState={this.updateAppState} />
        <List {...this.state} />
      </div>
    );
  }
}

export default App;