import React from 'react';
import Content from '../common/Content';
import { Link } from 'react-router';

export default class Account extends React.Component {
  constructor(p) {
    super(p);
    this.state = { user: {} };
  }
  render() {
    return (
      <Content>
        <h2> You are logged in </h2>
        <Link to={`/logout`}>Logout</Link>
        <div>{localStorage && localStorage.user}</div>
      </Content>
    );
  }
}

