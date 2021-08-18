import React, { Component } from 'react';
import axios from 'axios'

class App extends Component {
  getStudentData = async () => {
    const instance1 = axios.create({
      baseURL: 'http://localhost:3001/api1',
      timeout: 5000,
    })

    try {
      const { data: res } = await instance1({
        url: '/students',
        method: 'get'
      })
      console.log(res);
    } catch (error) {
      throw new Error("错误", error)
    }

  }

  getCarData = async () => {
    const instance2 = axios.create({
      baseURL: 'http://localhost:3001/api2',
      timeout: 5000,
    })

    try {
      const { data: res } = await instance2({
        url: '/cars',
        method: 'get'
      })
      console.log(res);
    } catch (error) {
      throw new Error("错误", error)
    }
  }

  render() {
    return (
      <div>
        <button onClick={this.getStudentData}>点我获取学生数据</button>
        <button onClick={this.getCarData}>点我获取汽车数据</button>
      </div>
    );
  }
}

export default App;