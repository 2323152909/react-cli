import React, { Component } from "react";
import PropTypes from 'prop-types'
import Item from '../Item'
import './index.css'

class List extends Component {
  // 对接收的props进行类型以及必要性的限制
  static propTypes = {
    todos: PropTypes.array.isRequired,
    updateTodo: PropTypes.func.isRequired,
    removeTodo: PropTypes.func.isRequired
  }

  render() {
    const { todos, updateTodo, removeTodo } = this.props;
    return (
      <ul className="todo-main">
        {
          todos.map(todo => {
            return <Item {...todo} key={todo.id} updateTodo={updateTodo} removeTodo={removeTodo}/>
          })
        }
      </ul>
    );
  }
}

export default List;
