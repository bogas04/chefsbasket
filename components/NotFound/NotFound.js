import React from 'react';
import TrendingTopics from '../common/TrendingTopics';
import Content from '../common/Content';

export default class NotFound extends React.Component {
  render() {
    return (
      <Content>
        <h1> 404 :(</h1>
        <p> Our little chefs couldn't find the page you were looking for. You can still browse through trending topics: </p>
        <TrendingTopics />
      </Content>
    );
  }
}

