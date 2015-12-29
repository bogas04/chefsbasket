import React from 'react';
import CardList from '../CardList';
import Content from '../Content';

export default class Travel extends React.Component {
  constructor(p) {
    super(p);
  }
  render() {
    return (
      <div>
        {
          this.props.children || (
            <Content>
              <h1> Travel stuff </h1>
              <CardList dataSource='/articles.json?category=travel' />
            </Content>
            )
        }
      </div>
    );
  }
}
