import express from 'express';
import bodyParser from 'body-parser';
import routes from '../components/routes';
import NotFound from '../components/NotFound';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { match, RoutingContext } from 'react-router';

const app = express();
const router  = express.Router();

app.use(bodyParser.json({ limit: '100mb' }));
app.use(bodyParser.urlencoded({ extended: false }));

// Basic Logger
app.use((req, res, next) => { console.log(`${req.method} ${req.url}`); next(); });

// Views Engine setup
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

// API
// Articles
app.use('/articles.json', require('./api/articles'));

// Like API
app.post('/like', (req, res) => { res.status(501) });

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
      //res.render('index.ejs', {title: `Page Not found`, reactOutput: renderToString(<NotFound />)});
      res.render('404.ejs', {title: `Page Not found`});
    }
  })
});

var server = app.listen(process.env.PORT || 8080, () => console.log('Server running on port: ' + server.address().port));
