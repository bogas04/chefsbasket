import express from 'express';
import constants from '../../constants';

let db = require('../db');
let router = express.Router();

router.get('/', (req, res) => {
  if (req.query.category && constants.categories.indexOf(req.query.category) < 0) {
    return res.status(503).json({
      msg: `Unknown category, it must be one of ${constants.categories.map(e => "'" + e + "'").join(', ')}`
    });
  }

  let whereObj = {};

  if(req.query.category) whereObj.category = req.query.category;

  if(req.query.q) { 
    // TODO: Implement Search Logic
    //whereObj. = req.query.category;
  }

  if(req.query.tag) {
    // TODO: Implement Tag Search Logic
    //whereOb
  }

  db.Article
  .where(whereObj)
  //.fetch({withRelated: ['tags']})
  .fetch()
  .then(e => { console.log(e); res.status(200).json({msg: 'found', data: [e] || [] }); })
  .catch(e => { console.log(e); res.status(500).json({msg: 'some error occured', data: [e] || [] }); });
});

function getImageAttributes(base64String) {
  let matches = base64String.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/);

  if (matches.length !== 3) { return { error: true, msg: `Invalid image`}; }

  if (constants.imageExtensions.indexOf(matches[1]) < 0) { return { error: true, msg: `Invalid image format`}; }

  let ext = '.' + matches[1].replace('image/', '');

  return { error: false, ext, imageBody: matches[2] };
}

router.post('/', (req, res) => {
  let article = req.body;

  // TODO: just bear with this
  article.header_image = article.header.image;
  article.header_title = article.header.title;
  article.header_summary = article.header.summary;
  article.author_name = article.author.name;
  article.author_url = article.author.url;

  delete article.header;
  delete article.author;

  let articleStr = JSON.stringify(Object.assign({}, article, { header_image: '' }));

  // Check for profanity, child abuse etc words
  if (constants.profaneWords.reduce((has, word) => has = has || articleStr.includes(word), false)) {
    return res.status(400).json({msg : `Article contains profane words`});
  }

  // Check if image exists
  if (article.header_image.length === 0) { return res.status(400).json({msg : `Upload an image`}); }

  // Check image format
  let d = getImageAttributes(article.header_image);

  if(d.error) { return res.status(400).json({ msg: d.msg }); }

  // See if slug matches any other
  db.Article.where({slug: article.slug}).count('slug')
  .then(e => {
    if(e === 1) {
      let d = new Date();
      article.slug += d.getDate() + '-' + (d.getMonth() + 1) + '-' + d.getFullYear();
    }

    let fs = require('fs');

    // Upload image
    fs.writeFile(`${constants.public.image.dir}${article.slug}${d.ext}`, new Buffer(d.imageBody, 'base64'), err => {
      if (err) return res.status(503).json({msg: `Couldn't save your image`, err});

      // Store address of image in object
      article.header_image_url= `${constants.public.image.url}${article.slug}${d.ext}`;
      delete article.header_image;
      // TODO: Add tags if not present, add to relation as well. 
      delete article.tags;

      new db.Article(article).save()
      .then(data => res.status(200).json({msg: 'Article saved', data}))
      .then(err => res.status(500).json({msg: 'Article saved', err}))
    });
  })
  .catch(e => res.status(500).json(e));
});

module.exports = router;
