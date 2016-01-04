import express from 'express';
import constants from '../constants';

import fs from 'fs';

let router = express.Router();

router.get('/', (req, res) => {
  if(req.query.category && constants.categories.indexOf(req.query.category) < 0) {
    return res.status(503).json({ msg: 'unknown category' });
  }

  // This is like DB connect
  fs.readFile(`${__dirname}/data/articles.json`, 'utf-8', (err, file) => {
    if(err) return res.status(400).json({ msg: 'server error' });
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

router.post('/', (req, res) => {
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
    return res.status(400).json({msg : `Article contains profane words`});
  }

  // Check image format
  if (article.header.image.length === 0) { return res.status(400).json({msg : `Upload an image`}); }
  let matches = article.header.image.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/);
  if (matches.length !== 3) { return res.status(400).json({msg: `Invalid image`}); }
  if (imageExtensions.indexOf(matches[1]) < 0) { return res.status(400).json({msg: `Invalid image format`}); }
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

module.exports = router;
