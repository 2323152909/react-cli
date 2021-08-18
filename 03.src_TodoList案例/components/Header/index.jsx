import React, { Component } from "react";
import PropTypes from 'prop-types'
import { nanoid } from "nanoid";
import "./index.css";

class Header extends Component {
  // 对接收的props进行类型以及必要性的限制
  static propTypes = {
    addTodo: PropTypes.func.isRequired
  }

  // 监听键盘抬起事件
  handleKeyUp = (event) => {
    // 解构复制获取 keyCode, target
    const { keyCode, target } = event;
    // 获取到addTodo的事件
    const { addTodo } = this.props;
    // 判断是否是回车键
    if (keyCode !== 13) return;
    if (target.value.trim() === ''){
      alert("输入不能为空！");
      return;
    };
    // 准备好一个todoObj对象
    const todoObj = { id: nanoid(), name: target.value, done: false };
    // 将todoObj传递给App
    addTodo(todoObj);
    target.value = "";
  };

  render() {
    return (
      <div className="todo-header">
        <input
          type="text"
          placeholder="请输入你的任务名称，按回车键确认"
          onKeyUp={this.handleKeyUp}
        />
      </div>
    );
  }
}

export default Header;
