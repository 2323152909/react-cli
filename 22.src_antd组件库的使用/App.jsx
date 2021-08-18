import React, { Component } from 'react';
import { Button } from 'antd'
// import 'antd/dist/antd.css'

class App extends Component {
  render() {
    return (
      <div>
        App....
        <Button type="primary">点我</Button>
        <Button>点我</Button>
        <Button type="link">点我</Button>
      </div>
    );
  }
}

export default App;