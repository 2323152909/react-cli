import React, { Component } from 'react';
import MyNavLink from '../../../components/MyNavLink';

class TabBar extends Component {
  render() {
    return (
      <div>
        <ul className="nav nav-tabs">
          <li>
            <MyNavLink replace to="/home/news">News</MyNavLink>
          </li>
          <li>
            <MyNavLink replace to="/home/message">Message</MyNavLink>
          </li>
        </ul>
      </div>
    );
  }
}

export default TabBar;