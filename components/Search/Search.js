import React from 'react';
import CardList from '../CardList';
import Content from '../Content';

export default class Search extends React.Component {
  render() {
    let { query } = this.props.location;
    return (
      <Content>
        <h1> Showing results for <code>{query.q}</code></h1>
        <CardList dataSource={
          query.tag ? 
            `articles.json?tag=${query.tag}` :
              `/articles.json?q=${query.q}`
        } />
    </Content>
    );
  }
}

