import React from 'react';

export default class Login extends React.Component {
  render() {
    return (
      <div className="container content">
        <h1> Login </h1>
        <form className="form">
          <div className="form-group">
            <label>Email ID</label>
            <input type="email" placeholder="Your email id" name="email" className="form-control "/>
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="password" placeholder="Your password" name="password" className="form-control "/>
          </div>
          <button className="btn btn-primary">Login</button>
        </form>
      </div>
    );
  }
}
