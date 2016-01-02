import express from 'express';
import bodyParser from 'body-parser';
import routes from '../components/routes';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { match, RoutingContext } from 'react-router';

const app = express();
const router  = express.Router();

app.use(bodyParser.json({ limit: '100mb' }));
app.use(bodyParser.urlencoded({
  extended: false
}));

app.use((req, res, next) => { console.log(`${req.method} ${req.url}`); next(); });

app.set('view engine', 'ejs');

app.get('/articles.json', (req, res) => {
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
    if(req.query.tag) { // Search Logic for tags
      data = data.filter(e => e.tags.indexOf(req.query.tag) > -1);
    }

    if(req.query.id && data.length > 0) {
      data = data.find(e => e.slug === req.query.id);
      return data ? res.status(200).json({ msg: 'found', data }) : res.status(404).json({ msg: 'not found' });
    } else {
      return res.status(200).json({ msg: `found ${data.length}`, data });
    }
  });
});

app.post('/articles.json', (req, res) => {
  let fs = require("fs");
  let data = JSON.parse(fs.readFileSync(`${__dirname}/data/articles.json`, 'utf-8'));
  let article = req.body;
  let articleStr = JSON.stringify(Object.assign({}, article, {header: { image: '' }}));
  const imageExtensions = ['image/jpeg', 'image/png', 'image/jpg'];
  const profaneWords = ['fuck', 'asshole', 'bitch'];  // TODO: Use a module
  const PUBLIC_IMAGE_URL = '/public/img/';
  const PUBLIC_IMAGE_DIR = `${__dirname}/../client/public/img/`;

  // Check if slug matches any other, if it does, add timestamp to slug
  if (data.find(e => e.slug === article.slug)) {
    let d = new Date();
    article.slug += d.getDate() + '-' + (d.getMonth() + 1) + '-' + d.getFullYear();
  }

  // Check for profanity, child abuse etc words
  if (profaneWords.reduce((has, word) => has = has || articleStr.includes(word), false)) {
    return res.status(500).json({msg : `Article contains profane words`});
  }

  // Check image format
  let matches = article.header.image.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/);
  if (matches.length !== 3) { return res.status(500).json({msg: `Invalid image`}); }
  if (imageExtensions.indexOf(matches[1]) < 0) { return res.status(500).json({msg: `Invalid image format`}); }
  let ext = '.' + matches[1].replace('image/', '');

  // Upload image
  fs.writeFile(`${PUBLIC_IMAGE_DIR}${article.slug}${ext}`, new Buffer(matches[2], 'base64'), err => {
    if (err) return res.status(503).json({msg: `Couldn't save your image`, err});

    // Store address of image in object
    article.header.image = `${PUBLIC_IMAGE_URL}${article.slug}${ext}`;

    // Insert article
    data.push(article);

    // Write to file
    fs.writeFile(`${__dirname}/data/articles.json`, JSON.stringify(data), err => {
      if (err) return res.status(503).json({msg: `Couldn't save your article`, err});
      return res.status(200).json({msg: `Article saved`});
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

// Public files
app.use('/', express.static(__dirname + '/../client'));

// React Isomorphic Stuff
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
