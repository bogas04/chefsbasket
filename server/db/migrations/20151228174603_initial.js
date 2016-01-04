'use strict';

let constants = require('../../../constants');

exports.up = (knex, Promise) => Promise.all([

  knex.schema.createTable('users', table => {
    table.bigIncrements('id').primary().unsigned();
    table.string('name', 50);
    table.string('email', 100);
    table.string('password', 255);
    table.enum('type', constants.userTypes).defaultTo(constants.default.userType);

    table.timestamps();
  }),

  knex.schema.createTable('tags', table => {
    table.string('name', 50).primary();
    table.biginteger('article_id').unsigned().index().references('id').inTable('articles');
  }),

  knex.schema.createTable('collections', table => {
    table.bigIncrements('id').primary().unsigned();
    table.string('name', 50);
    table.biginteger('user_id').unsigned().index().references('id').inTable('users');
    table.biginteger('article_id').unsigned().index().references('id').inTable('articles');
  }),

  knex.schema.createTable('comments', table => {
    table.bigIncrements('id').primary().unsigned();
    table.text('content');
    table.biginteger('user_id').unsigned().index().references('id').inTable('users');
    table.biginteger('article_id').unsigned().index().references('id').inTable('articles');
  }),

  knex.schema.createTable('articles', table => {
    table.bigIncrements('id').primary().unsigned();
    table.string('slug', 250).index();

    table.string('title', 250);
    table.string('author_name', 250).defaultTo(constants.default.authorName);
    table.string('author_url', 250);

    table.text('header_image_url');
    table.text('header_text', 250);
    table.text('header_summary');

    table.enum('category', constants.categories);

    // for recipes
    table.text('procedure');
    table.text('ingredients');
    table.integer('difficulty');
    table.integer('serves');

    // for others
    table.text('body');

    table.timestamps();
  }),
]);

exports.down = (knex, Promise) => Promise.all([
  knex.schema.dropTable('users'),
  knex.schema.dropTable('articles'),
  knex.schema.dropTable('collections'),
  knex.schema.dropTable('tags'),
  knex.schema.dropTable('comments'),
]);
