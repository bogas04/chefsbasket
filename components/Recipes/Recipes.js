import React from 'react';
import CardList from '../CardList';

export default class Recipes extends React.Component {
  render() {
    return (
      <div className="container content">
        <h1> Recipes stuff </h1>
        {this.props.children || <CardList />}
      </div>
    );
  }
}
