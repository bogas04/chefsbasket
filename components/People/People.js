import React from 'react';
import CardList from '../CardList';
import Content from '../Content';

export default class People extends React.Component {
  constructor(p) {
    super(p);
  }
  render() {
    return (
      <div>
        {
          this.props.children || (
            <Content>
              <h1> People stuff </h1>
              <CardList dataSource='/articles.json?category=people' />
            </Content>
            )
        }
      </div>
    );
  }
}
