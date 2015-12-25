import express from 'express';
import routes from '../components/routes';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { match, RoutingContext } from 'react-router';

const app = express();
app.set('view engine', 'ejs');

app.use('/data', express.static(__dirname + '/../data'));
app.use('/', express.static(__dirname + '/../client'));

// Redirect to this on /track?source=google_ad -> http://www.amazon.in/gp/feature.html/?ie=UTF8&docId=1000846393
app.get('*', (req, res, next) => {
  match({ routes, location: req.url }, (error, redirectLocation, renderProps) => {
    if (error) {
      res.status(500).send(error.message);
    } else if (redirectLocation) {
      res.redirect(302, redirectLocation.pathname + redirectLocation.search);
    } else if (renderProps) {
      res.render('index.ejs', {title: `Chef's Basket`, reactOutput: renderToString(<RoutingContext {...renderProps} />)});
    } else {
      res.status(404).send('Not found');
    }
  })
});

var server = app.listen(process.env.PORT || 8080, () => {
  console.log('Server running on host ' + ':' + server.address().port);
});
