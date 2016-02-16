import React from 'react';
import Content from '../common/Content';
import Navigation from '../common/Navigation';

export default ({ children }) => {
  return (
    <Content>
      <Navigation
        loggedIn={true}
        hideSearch={true}
        routes={[
          {url:`/account/article/add`, title: `Create Article`},
        ]}
      />
      { children }
    </Content>
  );
};
