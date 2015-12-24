import React from 'react';
import CardList from '../CardList';

export default class Search extends React.Component {
  render() {
    let { query } = this.props.location;
    return (
      <div className="container content">
        <h1> Showing results for <code>{query.q}</code></h1>
        <CardList />
      </div>
    );
  }
}

