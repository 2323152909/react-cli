import React, { Component } from 'react';
import PubSub from 'pubsub-js';
// import { search2 } from '../../network/search'

class Search extends Component {

  search = async () => {
    // 获取用户的输入(连续解构赋值+重命名)
    const { searchElement: { value: keyWord } } = this;
    // 发送请求前通知List更新状态
    PubSub.publish("updateListState", { isFirst: false, isLoading: true })
    // 发送网络请求
    console.log(keyWord);

    //#region 发送网络请求---使用axios发送
    // try {
    //   const { data: res } = await search2({ q: keyWord });
    //   const usersObj = res.items.map(item => {
    //     const newItem = {
    //       id: item.id,
    //       name: item.login,
    //       avatar: item.avatar_url,
    //       address: item.html_url
    //     }
    //     return newItem;
    //   })
    //   // 请求成功后通知List更新状态
    //   PubSub.publish("updateListState", { users: usersObj, isLoading: false })
    // } catch (error) {
    //   // 请求失败后通知List更新状态
    //   PubSub.publish("updateListState", { err: error.message, isLoading: false })
    // }
    //#endregion

    // 发送网络请求----使用fetch
    try {
      const res = await (await fetch(`http://localhost:${window.location.port}/api1/search/users2?q=${keyWord}`)).json();
      const usersObj = res.items.map(item => {
        const newItem = {
          id: item.id,
          name: item.login,
          avatar: item.avatar_url,
          address: item.html_url
        }
        return newItem;
      })
      PubSub.publish("updateListState", { users: usersObj, isLoading: false })
      console.log("成功了", res);
    } catch (error) {
      PubSub.publish("updateListState", { err: error.message, isLoading: false })
      console.log("失败了", error);
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