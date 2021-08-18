import React, { Component } from 'react';
import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'
import './App.css'

class App extends Component {
  // 状态在哪，操作状态的方法就在哪

  // 初始化状态
  state = {
    todos:[
      {id:1,name:'吃饭',done:true},
      {id:2,name:'睡觉',done:true},
      {id:3,name:'打豆豆',done:false},
      {id:4,name:'逛街',done:false}
    ]
  }

  // addTodo用于添加一个todo，接收的参数是todo对象
  addTodo = (todoObj) =>{
    // 获取原来的todos
    const { todos } = this.state;
    // 更新状态
    this.setState({
      todos: [todoObj, ...todos]
    })
  }

  // updateTodo用于更新todo对象，接收的参数是todo对象的id和done
  updateTodo = (id, done) =>{
    // 获取原来的todos
    const { todos } = this.state;
    // 更新指定id的todo对象
    const newTodos = todos.map(item => {
      if(item.id === id){
        item.done = done;
      }
      return item;
    });
    // 更新状态
    this.setState({
      todos: newTodos
    })
  }

  // removeTodo用于删除todo对象，接收的参数是todo对象的id
  removeTodo = (id) => {
    // 获取原来的todos
    const { todos } = this.state;
    // 过滤掉指定id的todo对象
    const newTodos = todos.filter(item => {
      return item.id !== id;
    })
    // 更新状态
    this.setState({
      todos: newTodos
    })
  }

  // 全选框的更新操作
  checkedAllTodo = (done) => {
    // 获取原来的todos
    const {todos} = this.state;
    // 加工数据
    const newTodos = todos.map(item => {
      return {...item, done:done};
    })
    // 更新状态
    this.setState({
      todos: newTodos
    })
  }

  clearAllDone = () => {
    // 获取到原来的todos
    const {todos} = this.state;
    // 过滤掉勾选的todo对象
    const newTodos = todos.filter(item => !item.done);
    // 更新状态
    this.setState({
      todos: newTodos
    })
  }

  render() {
    const { todos } = this.state;
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header addTodo={this.addTodo}/>
          <List todos={todos} updateTodo={this.updateTodo} removeTodo={this.removeTodo}/>
          <Footer todos={todos} checkedAllTodo={this.checkedAllTodo} clearAllDone={this.clearAllDone}/>
        </div>
      </div>
    );
  }
}

export default App;