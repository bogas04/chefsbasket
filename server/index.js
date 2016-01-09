import express from 'express';
import passport from 'passport';
import bodyParser from 'body-parser';
const app = express();
app.use('/', express.static(__dirname + '/../client'));

// Config
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({ limit: '25mb' }));
app.use(require('./session'));
app.use(passport.initialize());
app.use(passport.session());
passport.use(require('./passport'));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs' );

app.use((req, res, next) => { console.log(`${req.method} ${req.url} ${req.session.user && req.session.user.username}`); next(); });
// Authorization
app.post('/logout', (req, res) => { req.logout(); delete req.session.user; res.status(200).json({ msg: 'Logged out' }); });
app.post('/login', passport.authenticate('local'), (req, res) => { 
  let user = req.user.toJSON();
  delete user.password;
  req.session.user = user;
  res.status(200).json({ user })
});

['signup', 'user', 'articles', 'exists'].forEach(e => app.use(`/${e}.json`, require(`./api/${e}`)));
app.use('*', require('./react')); // React

const server = app.listen(process.env.PORT || 8080, () => console.log('Server running on port: ' + server.address().port));
