'use strict';

let constants = require('../../../constants');

exports.down = (knex, Promise) => knex.schema
.dropTable('users')
.dropTable('articles')
.dropTable('collections_articles')
.dropTable('collections')
.dropTable('comments');

exports.up = (knex, Promise) => knex.schema

.createTable('articles', table => {
  table.bigIncrements('id').primary().unsigned();

  table.string('slug', 250).index();

  table.string('title', 250);
  table.string('author_name', 250).defaultTo(constants.default.authorName);
  table.string('author_url', 250);

  table.string('header_title', 250);
  table.text('header_image_url');
  table.text('header_summary');

  table.enum('category', constants.categories);

  // TODO: Use JSONb for content
    // for recipes
    table.text('procedure');
    table.text('ingredients');
    table.integer('difficulty');
    table.integer('serves');

    // for others
    table.text('body');

  table.specificType('tags', 'varchar(50)[]');
  table.timestamps();
})

.createTable('users', table => {
  table.bigIncrements('id').primary().unsigned();

  table.string('name', 50);
  table.string('email', 100);
  table.string('password', 255);
  table.enum('type', constants.userTypes).defaultTo(constants.default.userType);

  table.timestamps();
})

.createTable('collections', table => {
  table.bigIncrements('id').primary().unsigned();

  table.string('name', 50).defaultTo('like');

  table.biginteger('user_id').unsigned().references('id').inTable('users');
  table.timestamps();
}) 

.createTable('collections_articles', table => {
  table.biginteger('collection_id').unsigned().references('id').inTable('collections');
  table.biginteger('article_id').unsigned().references('id').inTable('articles');
})

.createTable('comments', table => {
  table.biginteger('user_id').unsigned().references('id').inTable('users');

  table.text('content');

  table.biginteger('article_id').unsigned().references('id').inTable('articles');

  table.timestamps();
});
