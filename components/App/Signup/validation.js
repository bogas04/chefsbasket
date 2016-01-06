const messages = {
  passwordTooShort: `Password is too short`,
  passwordsDontMatch: `Passwords don't match`,
  emailInUse: `Email id is already used`,
  usernameInUse: `Username is already used`,
};
module.exports = (_this, type, e) => {
  let v = e.currentTarget.value;
  let parentNode = e.currentTarget.parentNode;
  switch(type) {
    case 'name':
      _this.setState({ name: v });
      break;
    case 'password':
      _this.setState({ password: v });
      if(v.length !== 0 && (v.length < 8 || v.length > 25) && _this.state.message.indexOf(messages.passwordTooShort) < 0) {
        _this.setState({ message: [..._this.state.message, messages.passwordTooShort] });
      } else {
        _this.setState({ message: _this.state.message.filter(e => e !== messages.passwordTooShort) });
      }

      if(_this.state.password_confirmation.length !== 0 && v.length !== 0 && v !== _this.state.password_confirmation) {
        if(_this.state.message.indexOf(messages.passwordsDontMatch) < 0) {
          _this.setState({ message: [..._this.state.message, messages.passwordsDontMatch] });
        }
      } else {
        _this.setState({ message: _this.state.message.filter(e => e !== messages.passwordsDontMatch) });
      }
      break;
    case 'password_confirmation':
      _this.setState({ password_confirmation: v });
      if(v.length !== 0 && _this.state.password.length !== 0 && _this.state.password !== v) {
        if(_this.state.message.indexOf(messages.passwordsDontMatch) < 0) {
          _this.setState({ message: [..._this.state.message, messages.passwordsDontMatch] });
        }
      } else {
        _this.setState({ message: _this.state.message.filter(e => e !== messages.passwordsDontMatch) });
      }
      break;
    case 'email': case 'username':
      _this.setState(type === 'email' ? { email: v } : { username: v });
      fetch(`/exists.json?${type}=${v}`)
      .then(d => d.json())
      .then(d => {
        let m = type === 'email' ? messages.emailInUse : messages.usernameInUse;
        if(d.exists) {
          if(_this.state.message.indexOf(m) < 0) {
            _this.setState({ message: [..._this.state.message, m] });
            parentNode.classList.add('has-danger');
            parentNode.classList.remove('has-success');
          }
        } else {
          _this.setState({ message: _this.state.message.filter(e => e !== m) });
          parentNode.classList.add('has-success');
          parentNode.classList.remove('has-danger');
        }
      })
      .catch(e => console.log(e));
      break;
  }
};
