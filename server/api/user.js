import express from 'express';
import constants from '../../constants';

let { Article, User, Comments, Collection } = require('../db');
let router = express.Router();

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
      res.status(404).json({msg: `No article found with id '${article_id}'`})
  ))
  .catch(data => res.status(500).json({msg: 'some error occured', data}) );
});

function addToCollection(user_id, article_id, name = 'like') {
  new Collection({ user_id, name, article_id }).save()
  .then(data => {
    console.log(data);
    res.status(200).json({ msg: 'Article added to the collection ${name}', data });
  })
  .catch(data => {
    console.log(data);
    res.status(200).json({ msg: 'Some error occured!', data })
  });
}

module.exports = router;
