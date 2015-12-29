exports.up = (knex, Promise) => Promise.all([

  knex.schema.createTable('users', table => {
    table.bigIncrements('id').primary().unsigned();
    table.string('name', 50);
    table.string('email', 100);
    table.string('password', 255);
  }),

  knex.schema.createTable('recipes', function (table) {
    table.bigIncrements('id').primary().unsigned(); table.string('slug', 250).index();

    table.string('title', 250);
    table.string('author', 250).defaultTo('Staff Member'); table.string('author_url', 250);

    table.text('header_image_url'); table.text('header_text', 250);

    table.text('procedure'); table.text('summary'); table.text('ingredients');

    table.integer('difficulty'); table.integer('serves'); table.integer('likes');

    table.timestamps();
  }),

  knex.schema.createTable('articles', function (table) {
    table.bigIncrements('id').primary().unsigned(); table.string('slug', 250).index();

    table.string('title', 250);
    table.string('author', 250).defaultTo('Staff Member'); table.string('author_url', 250);

    table.text('header_image_url'); table.text('header_text', 250);

    table.text('body');

    table.integer('likes');

    table.timestamps();
  }),

  knex.schema.createTable('tags', table => {
    table.string('name', 50).primary();
    table.biginteger('article_id').unsigned().index().references('id').inTable('article');
  }),

  knex.schema.createTable('media', table => {
    table.bigIncrements('id').primary().unsigned();
    table.string('url', 250); table.text('caption'); table.text('description');
    table.biginteger('article_id').unsigned().index().references('id').inTable('article');
  }),

  knex.schema.createTable('collections', table => {
    table.bigIncrements('id').primary().unsigned();
    table.string('name', 50);
    table.biginteger('user_id').unsigned().index().references('id').inTable('users');
  })

]);

exports.down = (knex, Promise) => Promise.all([
  knex.schema.dropTable('users'),
  knex.schema.dropTable('recipes'),
]);
