import React from 'react';
import TrendingTopics from '../common/TrendingTopics';
import Content from '../common/Content';

export default class NotFound extends React.Component {
  render() {
    let { pathname } = this.props.location;
    return (
      <Content>
        <h1> 404 </h1>
        <p> Our little chefs couldn't find the page <code>chefsbasket.com{pathname}</code> you were looking for. You can still browse through trending topics: </p>
        <div>
          <img width="100%" src="http://hdwallpapers.cat/wallpaper/little_chef_sleeping_cute_vegetables_baby_hd-wallpaper-1847564.jpg" />
        </div>
        <TrendingTopics />
      </Content>
    );
  }
}

