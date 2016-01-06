import express from 'express';
import passport from 'passport';
import bodyParser from 'body-parser';
import constants from '../constants';
const app = express();
const router  = express.Router();

// Config
app.use(bodyParser.json({ limit: '100mb' }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use((req, res, next) => { console.log(`${req.method} ${req.url}`); next(); });
app.use(passport.initialize());
app.use(passport.session());
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

passport.use(require('./passport-local'));

// Authorization
app.post('/signup.json', require('./api/signup'));

app.post('/logout', (req, res) => {
  req.logout();
  req.redirect('/');
});

app.post('/login.json', passport.authenticate('local', { session: false }), (req, res) => {
  let user = req.user.toJSON();
  delete user.password;
  res.status(200).json({ user })
});

// API
['user', 'articles', 'exists']
.forEach(e => app.use(`/${e}.json`, require(`./api/${e}`)));

// Static Files + React
app.use('/', express.static(__dirname + '/../client'));
app.use('*', require('./isomorphic-react'));

const server = app.listen(process.env.PORT || 8080, () => console.log('Server running on port: ' + server.address().port));
