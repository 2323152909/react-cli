import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom'
import Detail from './Detail';

class Message extends Component {
  state = {
    messageArr: [
      { id: '01', title: "消息一" },
      { id: '02', title: "消息二" },
      { id: '03', title: "消息三" }
    ]
  }

  render() {
    const { messageArr } = this.state;

    return (
      <div>
        <ul>
          {
            messageArr.map(msgObj => {
              return (
                <li key={msgObj.id}>
                  {/* 向路由组件传递params参数 */}
                  {/* <Link to={`/home/message/detail/${msgObj.id}/${msgObj.title}`}>{msgObj.title}</Link> */}

                  {/* 向路由组件传递search参数 */}
                  <Link to={`/home/message/detail/?id=${msgObj.id}&title=${msgObj.title}`}>{msgObj.title}</Link>
                </li>
              )
            })
          }
        </ul>
        <hr />
        {/* 声明接收params参数 */}
        {/* <Route path="/home/message/detail" component={Detail} /> */}

        {/* search参数无需声明接收，正常注册路由 */}
        <Route path="/home/message/detail" component={Detail} />
      </div>
    );
  }
}

export default Message;