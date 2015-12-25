import React from 'react';
import CardList from '../CardList';

export default class Recipes extends React.Component {
  render() {
    return (
      <div>
        {
          this.props.children || (
            <div className="container content">
              <h1> Recipes stuff </h1>
              <CardList />
            </div>
            )
        }
      </div>
    );
  }
}
