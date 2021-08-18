import React, { Component } from 'react';
import qs from 'querystring'

const DetailData = [
  { id: '01', content: '你好，中国' },
  { id: '02', content: '你好，廖浩东' },
  { id: '03', content: '你好，未来' },
]

class Detail extends Component {
  render() {
    // 接收params参数
    // const { id, title } = this.props.match.params;
    
    // 接收search参数
    console.log(this.props);
    const {search} = this.props.location;
    const { id, title } = qs.parse(search.replace("?",""));
    const findResult = DetailData.find(detailObj => {
      return detailObj.id === id;
    });
    console.log(findResult);
    return (
      <ul>
        <li>ID:{id}</li>
        <li>TITLE:{title}</li>
        <li>CONTENT:{findResult.content}</li>
      </ul>
    );
  }
}

export default Detail;