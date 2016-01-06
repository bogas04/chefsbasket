import React from 'react';
import Content from '../../common/Content';
import { Link } from 'react-router';

export default class Login extends React.Component {
  render() {
    return (
      <Content>
        <h1> Login </h1>
        <form className="form" method="post" action="/login">
          <div className="form-group">
            <label>Username</label>
            <input type="text" placeholder="Your username" name="username" className="form-control "/>
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="password" placeholder="Your password" name="password" className="form-control "/>
          </div>
          <button className="btn btn-primary">Login</button>
        </form>
        <div className="help-block">
          Don't have an account? <Link to={`/signup`}>Signup</Link> now.
        </div>
      </Content>
    );
  }
}
