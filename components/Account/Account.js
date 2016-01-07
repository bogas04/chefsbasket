import React from 'react';
import Content from '../common/Content';
import Navigation from '../common/Navigation';

export default class Account extends React.Component {
  render() {
    return (
      <Content>
        <Navigation
          loggedIn={true}
          hideSearch={true}
          routes={[
            {url:`/account/1`, title: `Page 1`},
            {url:`/account/2`, title: `Page 2`},
            {url:`/account/3`, title: `Page 3`},
          ]}
        />
        { this.props.children }
      </Content>
    );
  }
}

