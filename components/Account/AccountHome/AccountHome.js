import React from 'react';
import Content from '../../common/Content';
import { Link } from 'react-router';

export default class AccountHome extends React.Component {
  constructor(p) {
    super(p);
    this.state = { user: {} };
  }
  componentDidMount() {
    this.setState({ user: JSON.parse(localStorage.user) });
  }
  render() {
    return (
      <Content>
        <h3> Account </h3>
        <p>User type - {this.state.user.type}</p>
        <p>User name - {this.state.user.name}</p>
        <p>User email  - {this.state.user.email}</p>
        <p>User created_at - {this.state.user.created_at}</p>
      </Content>
    );
  }
}

