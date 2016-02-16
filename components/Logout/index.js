import React from 'react';
import Content from '../common/Content';
import auth from '../auth';

export default class Logout extends React.Component {
  componentDidMount() {
    auth.logout();
  }
  render() {
    return (
      <Content>
        <h3>You are now logged out.</h3>
      </Content>
    );
  }
}

