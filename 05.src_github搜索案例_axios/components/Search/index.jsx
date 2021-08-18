import React, { Component } from 'react';
import { search } from '../../network/search'

class Search extends Component {

  search = async () => {
    // 获取用户的输入(连续解构赋值+重命名)
    const { searchElement: { value: keyWord } } = this;
    // 发送请求前通知App更新状态
    this.props.updateAppState({ isFirst: false, isLoading: true });
    // 发送网络请求
    console.log(keyWord);
    try {
      const { data: res } = await search({ q: keyWord });
      const usersObj = res.items.map(item => {
        const newItem = {
          id: item.id,
          name: item.login,
          avatar: item.avatar_url,
          address: item.html_url
        }
        return newItem;
      })
      // 请求成功后通知App更新状态
      this.props.updateAppState({ users: usersObj, isLoading: false });
    } catch (error) {
      // 请求失败后通知App更新状态
      this.props.updateAppState({ err: error.message, isLoading: false });
    }
  }

  render() {
    return (
      <section className="jumbotron">
        <h3 className="jumbotron-heading">搜索github用户</h3>
        <div>
          <input type="text" placeholder="输入关键词点击搜索" ref={c => { this.searchElement = c }} />&nbsp;
          <button onClick={this.search}>搜索</button>
        </div>
      </section>
    );
  }
}

export default Search;