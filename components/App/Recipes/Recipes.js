import React from 'react';
import CardList from '../../common/CardList';
import Content from '../../common/Content';

export default class Recipes extends React.Component {
  constructor(p) {
    super(p);
  }
  render() {
    return (
      <div>
        {
          this.props.children || (
            <Content>
              <h1> Recipes stuff </h1>
              <CardList dataSource='/articles.json?category=recipes' />
            </Content>
            )
        }
      </div>
    );
  }
}
