import React from 'react';
import throttle from 'lodash.throttle';
import Content from '../common/Content';

export default class Signup extends React.Component {
  constructor(p) {
    super(p);
    this.state = { message: [], data: {
      password: '', password_confirmation: '', name: '', email: '', username: ''
    }};
  }
  render() {
    return (
      <Content>
        <h1> Signup </h1>
        <form onSubmit={e => this.submit(e)} className="form">
          <div className="col-md-6">
            <h3> Signup using password </h3>
            <div className="alert alert-danger" role="alert" style={{ display: this.state.message.length > 0 ? 'block': 'none' }}>
              {this.state.message.join(';')}
            </div>
            <div className="form-group">
              <label>Name</label>
              <input onChange={e => this.check('name', e)} type="text" placeholder="Your name" name="name" className="form-control "/>
            </div>
            <div className="form-group">
              <label>Email ID</label>
              <input onChange={e => this.check('email', e)} type="email" placeholder="Your email id" name="email" className="form-control "/>
            </div>
            <div className="form-group">
              <label>Username</label>
              <input onChange={e => this.check('username', e)} type="text" placeholder="Choose a username" name="username" className="form-control "/>
            </div>
            <div className="form-group">
              <label>Password</label>
              <input onChange={e => this.check('password', e)} type="password" placeholder="Your password" name="password" className="form-control "/>
            </div>
            <div className="form-group">
              <label>Verify Password</label>
              <input onChange={e => this.check('password_confirmation', e)} type="password"
                placeholder="Retype your password" name="password_confirmation" className="form-control "/>
            </div>
            <button className="btn btn-primary">Signup</button>
          </div>
          <div className="col-md-6">
            <h3> ... or signup via OAuth </h3>
            <div className="form-group text-center">
              <button onClick={e => this.oauth('fb')} className="btn btn-info">Facebook Login</button>
              <button onClick={e => this.oauth('gp')} className="btn btn-primary">Google Login</button>
              <button onClick={e => this.oauth('tw')} className="btn btn-success">Twitter Login</button>
            </div>
          </div>
        </form>
      </Content>
    );
  }
  submit(e) {
    e.preventDefault();
    fetch('/signup.json', {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state.data)
    })
    .then(e => e.json())
    .then(e => {
      alert('Account Created'); 
      // TODO: Redirect to home
    })
    .catch(e => console.log(e));
  }
  check(type, e) {
    let v = e.currentTarget.value;
    let parentNode = e.currentTarget.parentNode;
    const messages = {
      passwordTooShort: `Password is too short`,
      passwordsDontMatch: `Passwords don't match`,
      emailInUse: `Email id is already used`,
      usernameInUse: `Username is already used`,
    };
    let { data } = this.state;
    data[type] = v;
    this.setState({ data });

    switch(type) {
      case 'name':
        break;
      case 'password':
        if(v.length !== 0 && (v.length < 8 || v.length > 25) && this.state.message.indexOf(messages.passwordTooShort) < 0) {
          this.setState({ message: [...this.state.message, messages.passwordTooShort] });
        } else {
          this.setState({ message: this.state.message.filter(e => e !== messages.passwordTooShort) });
        }

        if(data.password_confirmation.length !== 0 && v.length !== 0 && v !== data.password_confirmation) {
          if(this.state.message.indexOf(messages.passwordsDontMatch) < 0) {
            this.setState({ message: [...this.state.message, messages.passwordsDontMatch] });
          }
        } else {
          this.setState({ message: this.state.message.filter(e => e !== messages.passwordsDontMatch) });
        }
        break;
      case 'password_confirmation':
        if(v.length !== 0 && data.password.length !== 0 && data.password !== v) {
          if(this.state.message.indexOf(messages.passwordsDontMatch) < 0) {
            this.setState({ message: [...this.state.message, messages.passwordsDontMatch] });
          }
        } else {
          this.setState({ message: this.state.message.filter(e => e !== messages.passwordsDontMatch) });
        }
        break;
      case 'email': case 'username':
        throttle(() => {
          fetch(`/exists.json?${type}=${v}`)
          .then(d => d.json())
          .then(d => {
            let m = type === 'email' ? messages.emailInUse : messages.usernameInUse;
            if(d.exists) {
              if(this.state.message.indexOf(m) < 0) {
                this.setState({ message: [...this.state.message, m] });
                parentNode.classList.add('has-danger');
                parentNode.classList.remove('has-success');
              }
            } else {
              this.setState({ message: this.state.message.filter(e => e !== m) });
              parentNode.classList.add('has-success');
              parentNode.classList.remove('has-danger');
            }
          })
          .catch(e => console.log(e));
        }, 200)();
        break;
    }
  }
  oauth(type) {
    switch(type) {
      case 'fb':
        break;
      case 'gp':
        break;
      case 'tw':
        break;
    }
  }
}
