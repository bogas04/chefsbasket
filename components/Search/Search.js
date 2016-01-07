import React from 'react';
import CardList from '../common/CardList';
import Content from '../common/Content';

export default class Search extends React.Component {
  render() {
    let { query } = this.props.location;
    return (
      <Content>
        <h1> Showing results for <code>{query.q || '#' + query.tag}</code></h1>
        <CardList dataSource={
          query.tag ? 
            `articles.json?tag=${query.tag}` :
              `/articles.json?q=${query.q}`
        } />
    </Content>
    );
  }
}

