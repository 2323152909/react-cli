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

  replaceShow = (id, title) => {
    return () => {
      // replace跳转+携带params参数
      // this.props.history.replace(`/home/message/detail/${id}/${title}`);

      // replace跳转+携带search参数
      // this.props.history.replace(`/home/message/detail/?id=${id}&title=${title}`);

      // replace跳转+携带state参数
      this.props.history.replace({pathname:'/home/message/detail', state:{id, title}});
    }
  }

  pushShow = (id, title) => {
    return () => {
      // push跳转+携带params参数
      // this.props.history.push(`/home/message/detail/${id}/${title}`);

      // push跳转+携带search参数
      // this.props.history.push(`/home/message/detail/?id=${id}&title=${title}`);

      // push跳转+携带state参数
      this.props.history.push({pathname:'/home/message/detail', state:{id, title}});
    }
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
                  {/* <Link to={`/home/message/detail/?id=${msgObj.id}&title=${msgObj.title}`}>{msgObj.title}</Link> */}

                  {/* 向路由组件传递state参数 */}
                  <Link to={{pathname:'/home/message/detail', state:{id:msgObj.id, title: msgObj.title}}}>{msgObj.title}</Link>

                  &nbsp;<button onClick={this.pushShow(msgObj.id, msgObj.title)}>push查看</button>
                  &nbsp;<button onClick={this.replaceShow(msgObj.id, msgObj.title)}>replace查看</button>

                </li>
              )
            })
          }
        </ul>
        <hr />
        {/* 声明接收params参数 */}
        {/* <Route path="/home/message/detail/:id/:title" component={Detail} /> */}

        {/* search参数无需声明接收，正常注册路由 */}
        {/* <Route path="/home/message/detail" component={Detail} /> */}

        {/* state参数无需声明接收，正常注册路由 */}
        <Route path="/home/message/detail" component={Detail} />

      </div>
    );
  }
}

export default Message;