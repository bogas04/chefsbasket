module.exports = {
  login(username, password, cb) {
    if (localStorage.user) {
      if (cb) cb(true)
        this.onChange(true);
      return;
    }
    fetch('/login', {
      method: 'post',
      credentials: 'include',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
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
    fetch(`/logout`, { method: 'post' }).then(e => {
      console.log(e); 
      delete localStorage.user;
      if(cb) cb();
      this.onChange(false);
    }).catch(console.log);
  },

  loggedIn() {
    return !!localStorage.user
  },

  onChange() {
  }
}
