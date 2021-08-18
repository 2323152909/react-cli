import React, { Component } from 'react';
import PubSub from 'pubsub-js';
import './index.css'

class List extends Component {
  // 初始化状态
  state = {
    users: [], // users初始值为数组
    isFirst: true, //是否为第一次打开页面
    isLoading: false, // 标识是否处于加载中
    error: '' //存储请求相关的错误信息
  }

  componentDidMount() {
    // 订阅事件
    this.token = PubSub.subscribe("updateListState", (message, stateObj) => {
      console.log(message);
      console.log(stateObj);
      // 获取原来的users
      // 更新状态
      this.setState({
        ...stateObj
      })
    })
  }

  componentWillUnmount() {
    // 取消订阅
    PubSub.unsubscribe(this.token)
  }

  render() {
    const { users, isFirst, isLoading, err } = this.state;

    return (
      <div className="row">
        {
          isFirst ? <h2>欢迎使用，输入关键字搜索用户</h2> :
            isLoading ? <h2>Loading...</h2> :
              err ? <h2 style={{ color: 'red' }}>{err}</h2> :
                users.map(userobj => {
                  return <div className="card" key={userobj.id}>
                    <a href={userobj.address} target="_blank" rel="noreferrer">
                      <img src={userobj.avatar} style={{ width: '100px' }} alt="avator" />
                    </a>
                    <p className="card-text">{userobj.name}</p>
                  </div>
                })
        }
      </div >
    );
  }
}

export default List;