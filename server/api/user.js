import express from 'express';
import constants from '../../constants';

let { Article, User, Comments, Collections } = require('../db');
let router = express.Router();

function addToCollection(user_id, article_id, name = 'like') {
  // TODO: 
  // see if collection exists
  // if doesn't then ad to collection
  // now add the relation to collections_articles
}

router.post('/like/:article_id', (req, res) => {
  let { article_id } = req.params;

  db.Article
  .where({id: article_id})
  .count('id')
  .then(count => (
    count === 1 ? addToCollection(req.user.id, article_id) :
      res.status(404).json({msg: `No article found with id '${article_id}'`})
  ))
  .catch(data => res.status(500).json({msg: 'some error occured', data}) );
});

router.post('/add_to_collection/:article_id/:collection_name', (req, res) => {
  let { article_id, collection_name } = req.params;

  db.Article
  .where({id: article_id})
  .count('id')
  .then(count => (
    count === 1 ? addToCollection(req.user.id, article_id, collection_name) :
      res.status(404).json({msg: `No article found with slug '${slug}'`})
  ))
  .catch(data => res.status(500).json({msg: 'some error occured', data}) );
});

module.exports = router;
