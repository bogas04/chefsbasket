import fs from 'fs';
import express from 'express';
import constants from '../../constants';

let { bookshelf, Article, User, Comments, Collections } = require('../db');
let router = express.Router();

router.get('/:slug', (req, res) => {
  let { slug } = req.params;
  Article.where({slug}).fetch()
  .then(data => res.status(200).json({msg: 'found', data}))
  .catch(data => res.status(500).json({msg: 'some error occured', data }));
});

router.get('/', (req, res) => {

  if (req.query.category && constants.categories.indexOf(req.query.category) < 0) {
    return res.status(503).json({
      msg: `Unknown category, it must be one of ${constants.categories.map(e => "'" + e + "'").join(', ')}`
    });
  }

  let query = Article;

  if(req.query.category) { query = query.where({category: req.query.category }); }

  if(req.query.q) { query = query.where('title', 'like', `%${req.query.q}%`) }

  if(req.query.tag) { query = query.where(bookshelf.knex.raw(`'${req.query.tag.toUpperCase()}' = any (tags)`)); }

  query.fetchAll()
  .then(data => res.status(200).json({msg: `found ${data.length} results`, data }))
  .catch(data => {
    console.log(data);
    res.status(500).json({msg: 'some error occured', data })
  });
});

router.delete('/:slug', (req, res) => {
  let { slug } = req.params;
  if (req.session.user && req.user.type === 'admin')  {
    new Article({ slug }).destroy()
    .then(e => {
      fs.rm(`${constants.public.image.dir}${article.slug}`, (err) => {
        // TODO: Fix it
        console.log(e);
        res.status(200).json({})
      })
    })
  }
});

router.post('/', (req, res) => {
  if (!req.session.user || req.session.user.type === 'normal')  {
    return res.status(401).json({ msg: `Your user role is not permitted to do this action` });
  }

  let article = req.body;
  let slug = article.slug;

  let articleStr = JSON.stringify(Object.assign({}, article, { header_image: '' }));

  // Fix tags
  article.tags = article.tags.map(t => t.toUpperCase().trim());

  // Check for profanity, child abuse etc words
  if (constants.profaneWords.reduce((has, word) => has = has || articleStr.includes(word), false)) {
    return res.status(400).json({msg : `Article contains profane words`});
  }

  // TODO: Check if all fields are filled
  if (article.header_image.length === 0) { return res.status(400).json({msg : `Upload an image`}); }

  // Check image format
  let d = getImageAttributes(article.header_image);

  if(d.error) { return res.status(400).json({ msg: d.msg }); }

  // See if slug matches any other
  Article.where({slug}).count('slug')
  .then(e => {
    if(e === 1) {
      let d = new Date();
      article.slug += d.getDate() + '-' + (d.getMonth() + 1) + '-' + d.getFullYear();
    }

    // Upload image
    fs.writeFile(`${constants.public.image.dir}${article.slug}${d.ext}`, new Buffer(d.imageBody, 'base64'), err => {
      if (err) return res.status(503).json({msg: `Couldn't save your image`, err});

      // Store address of image in object
      article.header_image_url= `${constants.public.image.url}${article.slug}${d.ext}`;
      delete article.header_image;

      new Article(article).save()
      .then(data => res.status(200).json({msg: 'Article saved', data}))
      .then(err => res.status(500).json({msg: 'Article couldn\'t be saved', err}))
    });
  })
  .catch(e => res.status(500).json(e));
});

function getImageAttributes(base64String) {
  let matches = base64String.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/);

  if (matches.length !== 3) { return { error: true, msg: `Invalid image`}; }

  if (constants.imageExtensions.indexOf(matches[1]) < 0) { return { error: true, msg: `Invalid image format`}; }

  let ext = '.' + matches[1].replace('image/', '');

  return { error: false, ext, imageBody: matches[2] };
}

module.exports = router;
