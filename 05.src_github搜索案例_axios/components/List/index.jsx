import React, { Component } from 'react';
import './index.css'

class List extends Component {
  render() {
    const { users, isFirst, isLoading, err } = this.props;

    return (
      <div className="row">
        {
          isFirst ? <h2>欢迎使用，输入关键字搜索用户</h2> : 
          isLoading ? <h2>Loading...</h2> : 
          err ? <h2 style={{color:'red'}}>{err}</h2> :
          users.map(userobj => {
            return <div className="card" key={userobj.id}>
              <a href={userobj.address} target="_blank" rel="noreferrer">
                <img src={userobj.avatar} style={{ width: '100px' }} alt="avator" />
              </a>
              <p className="card-text">{userobj.name}</p>
            </div>
          })
        }
      </div >
    );
  }
}

export default List;