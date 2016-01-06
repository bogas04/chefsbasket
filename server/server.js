import React from 'react';
import { User } from './db';
import express from 'express';
import passport from 'passport';
import bodyParser from 'body-parser';
import routes from '../components/routes';
import { Strategy } from 'passport-local';
import { renderToString } from 'react-dom/server';
import { match, RoutingContext } from 'react-router';
import bcrypt from 'bcrypt';

const Password= {
  hash: password => bcrypt.hashSync(password, 10),
    compare: (password, hash) => bcrypt.compareSync(password, hash),
};
const app = express();
const router  = express.Router();

app.use(bodyParser.json({ limit: '100mb' }));
app.use(bodyParser.urlencoded({ extended: false }));

// passport setup
app.use(passport.initialize());
app.use(passport.session());

passport.use(new Strategy({ usernameField: 'email', passwordField: 'password' },(email, password, done) => {
  User.where({ email }).fetchOne()
  .then(user => {
    if(user) {
      if (Password.compare(password, user.password)) {
        return done(null, false, { message: 'Incorrect password.' });
      } else {
        return done(null, user);
      }
    } else {
      return done(null, false, { message: 'Incorrect email.' });
    }
  })
  .catch(console.log);
}));

// Basic Logger
app.use((req, res, next) => { console.log(`${req.method} ${req.url}`); next(); });

// Views Engine setup
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.post('/login', passport.authenticate('local', { successRedirect: '/', failureRedirect: '/login' }));
app.post('/logout', passport.authenticate('local', { successRedirect: '/', failureRedirect: '/login' }));

// API
// User
app.use('/user.json/like', require('./api/user'));
// Articles
app.use('/articles.json', require('./api/articles'));

// Public files
app.use('/', express.static(__dirname + '/../client'));
// React Isomorphic Enabler
app.get('*', (req, res, next) => {
  match({ routes, location: req.url }, (error, redirectLocation, renderProps) => {
    if (error) {
      res.status(500).send(error.message);
    } else if (redirectLocation) {
      res.redirect(302, redirectLocation.pathname + redirectLocation.search);
    } else if (renderProps) {
      res.render('index.ejs', {title: `Chef's Basket`, reactOutput: renderToString(<RoutingContext {...renderProps} />)});
    } else {
      res.render('404.ejs', {title: `Page Not found`});
    }
  })
});

var server = app.listen(process.env.PORT || 8080, () => console.log('Server running on port: ' + server.address().port));
