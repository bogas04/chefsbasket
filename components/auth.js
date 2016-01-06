module.exports = {
  login(username, password, cb) {
    if (localStorage.user) {
      if (cb) cb(true)
        this.onChange(true);
      return;
    }
    fetch('/login.json', {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, password })
    })
    .then(e => e.json())
    .then(e => {
      localStorage.user = JSON.stringify(e.user);
      this.onChange(true);
      cb(true, e);
    })
    .catch(e => {
      cb(false, e);
      this.onChange(false);
    });
  },

  getUser() {
    return localStorage.user
  },

  logout(cb) {
    delete localStorage.user;
    if(cb) cb();
    this.onChange(false);
  },

  loggedIn() {
    return !!localStorage.user
  },

  onChange() {
  }
}
