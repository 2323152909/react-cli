import React, { Component } from "react";
import PropTypes from 'prop-types'
import "./index.css";

class Item extends Component {
  // 对接收的props进行类型以及必要性的限制
  static propTypes = {
    updateTodo: PropTypes.func.isRequired,
    removeTodo: PropTypes.func.isRequired
  }

  state = { mouse: false }; // 标识鼠标是否移入

  // 监听鼠标移入操作
  handleEnter = (status) => {
    return () => {
      this.setState({
        mouse: status,
      });
    };
  };

  // 监听鼠标移出操作
  handleLeave = (status) => {
    return () => {
      this.setState({
        mouse: status,
      });
    };
  };

  // 监听复选框状态变更操作
  handleCheck = (id) => {
    return (event) => {
      const { updateTodo } = this.props
      updateTodo(id, event.target.checked);
    }
  }

  // 监听删除按钮点击事件
  handleRemove = (id) => {
    const { removeTodo } = this.props;
    const confirmResult = window.confirm("确定删除？");
    if (confirmResult) {
      removeTodo(id);
    }
    return;
  }

  render() {
    const { id, name, done } = this.props;
    const { mouse } = this.state;
    return (
      <li style={{ backgroundColor: mouse ? "#ddd" : "white" }} onMouseOver={this.handleEnter(true)} onMouseLeave={this.handleLeave(false)}>
        <label>
          <input type="checkbox" checked={done} onChange={this.handleCheck(id)} />
          <span>{name}</span>
        </label>
        <button onClick={() => { this.handleRemove(id) }} className="btn btn-danger" style={{ display: mouse ? "block" : "none" }}>
          删除
        </button>
      </li>
    );
  }
}

export default Item;
