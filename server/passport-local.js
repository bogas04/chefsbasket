import { Strategy } from 'passport-local';
import constants from '../constants';
import passport from 'passport';
import { User } from './db';

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  User.where({ id: user.id }).fetch()
  .then(u => done(null, u));
});

module.exports = new Strategy({ usernameField: 'username', passwordField: 'password' },(username, password, done) => {
  User.where({ username }).fetch()
  .then(user => {
    if(user) {
      if (!constants.password.compare(password, user.toJSON().password)) {
        return done(null, false, { message: 'Incorrect password.' });
      } else {
        return done(null, user);
      }
    } else {
      return done(null, false, { message: 'Incorrect email.' });
    }
  })
  .catch(console.log);
});
