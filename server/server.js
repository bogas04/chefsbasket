import express from 'express';
import routes from '../components/routes';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { match, RoutingContext } from 'react-router';

const app = express();
const router  = express.Router();

app.set('view engine', 'ejs');

app.use((req, res, next) => { console.log(`${req.method} ${req.url}`); next(); });

let getArticle = (req, res) => {
  let fs = require('fs');
  if(req.query.category && [
    'entertainment',
  'travel',
  'people',
  'recipes',
  'ingredients',
  ].indexOf(req.query.category) < 0) return res.status(503).json({ msg: 'unknown category' });

  // This is like DB connect
  fs.readFile(`${__dirname}/data/articles.json`, 'utf-8', (err, file) => {
    if(err) return res.status(500).json({ msg: 'server error' });
    // This is like table select
    let data = JSON.parse(file);

    if(req.query.category) { // Filtering as per category
      data = data.filter(e => e.category === req.query.category);
    }
    if(req.query.q) { // Search Logic
      data = data.filter(e => e.title.includes(req.query.q));
    }
    if(req.query.tag) { // Search Logic
      data = data.filter(e => e.tags.indexOf(req.query.tag) > -1);
    }

    if(req.query.id && data.length > 0) {
      data = data.find(e => e.slug === req.query.id);
      return data ? res.status(200).json({ msg: 'found', data }) : res.status(404).json({ msg: 'not found' });
    } else {
      return res.status(200).json({ msg: `found ${data.length}`, data });
    }
  });
};

app.get('/articles.json', getArticle);
app.post('/articles.json', (req, res) => {
  console.log(req);
  let fs = require('fs');
  fs.readFile(`${__dirname}/data/articles.json`, 'utf-8', (err, data) => {
    if(err) return res.status(500).json({msg: `Couldn't connect to articles`, err});
    data = JSON.parse(data);
    data.push(req.body);
    fs.writeFile(`${__dirname}/data/articles.json`, JSON.stringify(data), err => {
      if(err) return res.status(500).json({msg: `Couldn't upload the article`, err});
      return res.status(200).json({msg: `Uploaded the article`});
    });
  });
});

app.post('/like', (req, res) => {
  let fs = require('fs');
  fs.readFile(`${__dirname}/data/articles.json`, 'utf-8', (err, data) => {
    if(err) return res.status(500).json({msg: `Couldn't connect to articles`, err});
    data = JSON.parse(data);
    // Logic
    //data.push(req.body);
    //fs.writeFile(`${__dirname}/data/articles.json`, JSON.stringify(data), err => {
      //if(err) return res.status(500).json({msg: `Couldn't upload the article`, err});
      //return res.status(200).json({msg: `Uploaded the article`});
    //});
  });
});

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
  console.log('Server running on port: ' + server.address().port);
});
