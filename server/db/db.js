import bookshelf from './db.config';

bookshelf.knex.schema.createTableIfNotExists('users', t => {
  t.increments('id');
  t.string('name');
  t.string('username');
  t.string('email');
  t.string('password');
  t.timestamps();
});

var User = bookshelf.Model.extend({
  tableName: 'users',
  hasTimestamps: true,
});
