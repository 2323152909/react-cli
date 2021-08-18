import React, { Component } from "react";
import './index.css'

class Footer extends Component {
  // 全选checkbox的回调
  handleCheckedAll = (event) =>{
    this.props.checkedAllTodo(event.target.checked);
  }

  // 删除所有勾选的todo对象
  handleClearAllDone = () => {
    this.props.clearAllDone();
  }

  render() {
    const {todos} = this.props;
    // 已完成的个数
    const doneCount = todos.filter(item => item.done).length;
    // 总数
    const total = todos.length;
    return (
      <div className="todo-footer">
        <label>
          <input type="checkbox" onChange={this.handleCheckedAll} checked={doneCount === total && total !== 0 ? true:false} />
        </label>
        <span>
          <span>已完成{doneCount}</span> / 全部{total}
        </span>
        <button className="btn btn-danger" onClick={this.handleClearAllDone}>清除已完成任务</button>
      </div>
    );
  }
}

export default Footer;
