var constants = require('../../../constants');

exports.down = (knex, Promise) => knex.schema
.dropTable('collections_articles')
.dropTable('comments')
.dropTable('users')
.dropTable('articles');

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

  // TODO: Consider JSONb for content
  // for recipes
  table.text('procedure');
  table.text('ingredients');
  table.integer('difficulty');
  table.integer('preparation_time_in_minutes');
  table.integer('serves');

  // for others
  table.text('body');

  table.specificType('tags', 'varchar(50)[]');
  table.specificType('photos', 'varchar(250)[]');
  table.timestamps();
})

.createTable('users', table => {
  table.string('name', 100);
  table.string('password', 255).notNullable();
  table.bigIncrements('id').primary().unsigned();
  table.string('email', 100).notNullable().unique();
  table.string('username', 50).notNullable().unique().index();

  table.timestamps();
  table.enum('type', constants.userTypes).defaultTo(constants.default.userType);
})

.createTable('collections_articles', table => {
  table.biginteger('user_id').unsigned().references('id').inTable('users');
  table.timestamps();
  table.string('name');
  table.biginteger('article_id').unsigned().references('id').inTable('articles');
})

.createTable('comments', table => {
  table.biginteger('user_id').unsigned().references('id').inTable('users');

  table.text('content');

  table.biginteger('article_id').unsigned().references('id').inTable('articles');

  table.timestamps();
});
