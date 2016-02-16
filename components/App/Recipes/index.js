import React from 'react';
import CardList from '../../common/CardList';
import Content from '../../common/Content';

export default ({ children }) => {
  return (
    <div>
      {
        children || (
          <Content>
            <h1> Recipes stuff </h1>
            <CardList dataSource='/articles.json?category=recipes' />
          </Content>
          )
      }
    </div>
  );
}
