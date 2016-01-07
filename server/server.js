import express from 'express';
import passport from 'passport';
import bodyParser from 'body-parser';
import constants from '../constants';
const app = express();

// Config
app.use((req, res, next) => { console.log(`${req.method} ${req.url}`); next(); });
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({ limit: '100mb' }));
passport.use(require('./passport-local'));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs' );
app.use(passport.initialize());
app.use(passport.session());

// Authorization
app.post('/logout', (req, res) => { req.logout(); req.redirect('/'); });
app.post('/login.json', passport.authenticate('local', { session: false }), (req, res) => {
  let user = req.user.toJSON();
  delete user.password;
  res.status(200).json({ user })
});

// API
['signup', 'user', 'articles', 'exists'].forEach(e => app.use(`/${e}.json`, require(`./api/${e}`)));

// Static Files + React
app.use('/', express.static(__dirname + '/../client'));
app.use('*', require('./isomorphic-react'));

const server = app.listen(process.env.PORT || 8080, () => console.log('Server running on port: ' + server.address().port));
