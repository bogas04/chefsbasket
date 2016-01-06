import React from 'react';
import auth from '../auth';
import Content from '../common/Content';
import { Link } from 'react-router';

export default class Login extends React.Component {
  constructor(p) {
    super(p);
    this.state = { message: '', data: { email: '', password: '' }};
  };
  submit(e) {
    e.preventDefault();
    let { username, password } = this.state.data;
    auth.login(username, password, loggedIn => {
      alert(loggedIn? 'logged in': 'failed');
    });
  }
  change(type, e) {
    let { data } = this.state;
    data[type] = e.currentTarget.value;
    this.setState({ data });
  }
  render() {
    return (
      <Content>
        <h1> Login </h1>
        <form className="form" onSubmit={e => this.submit(e)} method="post" action="/login">
          <div className="form-group">
            <label>Username</label>
            <input onChange={e => this.change('username', e) }type="text" placeholder="Your username" name="username" className="form-control "/>
          </div>
          <div className="form-group">
            <label>Password</label>
            <input onChange={e => this.change('password', e) }type="password" placeholder="Your password" name="password" className="form-control "/>
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
